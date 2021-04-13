import React from "react";

import { Grommet, Text, Card, CardBody, Box } from "grommet";
import { Checkmark, SubtractCircle } from "grommet-icons";

import { REMOVE_EXTRA } from '../../utils/mutations'
import { useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

const PantryShelfExtraCard = ({ cardData, canSelect, canDelete, setItem, item }) => {


  const [deleteExtra] = useMutation(REMOVE_EXTRA, {
    update(cache, { data: {removeExtra }}) {
      const { me } = cache.readQuery({ query: QUERY_ME })
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: {
          ...me,
          extras: removeExtra.extras
        }}
      })
    }
  })

  const handleSelect = () => {
    if (canSelect) {
      if (item.includes(cardData)) {
        setItem(item.filter(ext => ext !== cardData))
      } else {
        setItem([...item, cardData])
      }
    }
  }

  const handleDelete = async () => {
    try {
      await deleteExtra({
        variables: { type: cardData }
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Grommet>
      {/* make background equal to user's selection for teatype */}
      <Card onClick={canSelect ? handleSelect : null} height="xsmall" width="xsmall" background="light-1">
        <CardBody style={{position: "relative"}} fill="vertical" justify="center" align="center">
          {canSelect &&  item.includes(cardData) && 
          <Box style={{ position: "absolute", top: "5px", right:"5px"}}>
            <Checkmark />
          </Box>}
          {canDelete && !canSelect && 
          <Box onClick={handleDelete} style={{ position: "absolute", top: "5px", right:"5px"}}>
            <SubtractCircle size="18px" />
          </Box>}
          <Text textAlign="center">{cardData}</Text>
        </CardBody>
      </Card>
    </Grommet>
  );
};

export default PantryShelfExtraCard;
