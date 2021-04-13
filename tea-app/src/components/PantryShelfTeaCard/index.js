import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Text, Card, CardBody, CardFooter, Box } from "grommet";
import { Checkmark, SubtractCircle } from "grommet-icons";

import { REMOVE_TEA } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

const colors = {
  "Black Tea": "#6F7269",
  "Green Tea": "#749A5C",
  Rooibos: "#FC6161",
  "Oolong Tea": "#FFBC44",
  "White Tea": "#FBFBF7",
  Herbal: "#A2065A",
};

const PantryShelfTeaCard = ({ cardData, canSelect, canDelete, setItem, item }) => {

  const [deleteTea] = useMutation(REMOVE_TEA, {
    uupdate(cache, { data: {removeTea }}) {
      const { me } = cache.readQuery({ query: QUERY_ME })
      console.log(removeTea)
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
    try {
      await deleteTea({
        variables: { id: cardData._id }
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Grommet>
      {/* make background equal to user's selection for teatype */}
      <Card
        onClick={canSelect ? handleSelect : null}
        height="125px"
        width="125px"
        background={colors[cardData.type] || "light-1"}
      >
        <CardBody style={{position: "relative"}}  fill="vertical" justify="center" align="center">
          {canSelect && !canDelete && item?._id === cardData._id && 
          <Box style={{ position: "absolute", top: "5px", right:"5px"}}>
            <Checkmark />
          </Box>}
          {canDelete && !canSelect && 
          <Box onClick={handleDelete} style={{ position: "absolute", top: "5px", right:"5px"}}>
            <SubtractCircle size="18px" />
          </Box>}
          <Text textAlign="center">{cardData.name}</Text>
          <CardFooter pad={{ horizontal: "medium" }}>
            <Text size="small" weight="bold">
              {cardData.brand}
            </Text>
          </CardFooter>
        </CardBody>
      </Card>
    </Grommet>
  );
};

export default PantryShelfTeaCard;
