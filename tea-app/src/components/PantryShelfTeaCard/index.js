import React from "react";

import { Grommet, Text, Card, CardHeader, CardBody, CardFooter, Box, Heading } from "grommet";
import { Checkmark, Spa, SubtractCircle } from "grommet-icons";

import { REMOVE_TEA } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

import Auth from '../../utils/auth'

const colors = {
  "Black Tea": "#6F7269",
  "Green Tea": "#749A5C",
  Rooibos: "#FC6161",
  "Oolong Tea": "#FFBC44",
  "White Tea": "#FBFBF7",
  Herbal: "#A2065A",
};

const PantryShelfTeaCard = ({ cardData, canSelect, canDelete, setItem, item, setAddNotification, height, width, displayFooter }) => {

  const [deleteTea] = useMutation(REMOVE_TEA, {
    uupdate(cache, { data: {removeTea }}) {
      const { me } = cache.readQuery({ query: QUERY_ME })
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: {
          ...me,
          teas: removeTea.teas
        }}
      })
    }
  })

  const handleSelect = () => {
    if (canSelect) {
      if (item?._id === cardData._id) {
        setItem()
      } else {
        setItem(cardData)
      }
    }
  }

  const handleDelete = async () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null

    if (!token) {
        Auth.logout()
        return false
    }

    try {
      await deleteTea({
        variables: { id: cardData._id }
      })
      setAddNotification({show: true, type:'warning', message: "Tea removed"})
      setTimeout(() => {
        setAddNotification({show: false, type: '', message: ''})
      }, 3000)
    } catch (e) {
      setAddNotification({show: true, type:'error', message: `Error: ${e.message.replace('GraphQL error: ', '')}`})
      setTimeout(() => {
        setAddNotification({show: false, type: '', message: ''})
      }, 3000)
      console.error(e)
    }
  }

  return (
    <Grommet>
      {/* make background equal to user's selection for teatype */}
      <Card
        onClick={canSelect ? handleSelect : null}
        height={height ? height : "125px"}
        width={width ? width : "125px" }
        pad={"xsmall"}
        background={colors[cardData.type] || "light-1"}
      >
        <CardHeader direction="row" justify="between">
          <Spa size="18px" />
          {canSelect && !canDelete && item?._id === cardData._id && 
          <Box>
            <Checkmark size="18px" />
          </Box>}
          {canDelete && !canSelect && 
          <Box onClick={handleDelete}>
            <SubtractCircle size="18px" />
          </Box>}          
        </CardHeader>
        <CardBody  fill="vertical" justify="center" align="center">
          <Heading textAlign="center" level="3" margin="0" size="small" >
            {cardData.name}
          </Heading>
        </CardBody>
        {
          displayFooter &&
          <CardFooter direction="column" align="center" justify="end" gap={false} >
            <Text size="small" >
              {cardData.type}
            </Text>
            <Text size="small">
              By: {cardData.brand}
            </Text>
          </CardFooter>          
        }
      </Card>
    </Grommet>
  );
};

export default PantryShelfTeaCard;
