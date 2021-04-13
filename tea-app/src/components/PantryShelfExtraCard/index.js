import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Text, Card, CardBody, Box } from "grommet";
import { Checkmark } from "grommet-icons";

const PantryShelfExtraCard = ({ cardData, canSelect, canDelete, setItem, item }) => {

  const handleSelect = () => {
    if (canSelect) {
      if (item.includes(cardData)) {
        setItem(item.filter(ext => ext !== cardData))
      } else {
        setItem([...item, cardData])
      }
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
          <Text textAlign="center">{cardData}</Text>
        </CardBody>
      </Card>
    </Grommet>
  );
};

export default PantryShelfExtraCard;
