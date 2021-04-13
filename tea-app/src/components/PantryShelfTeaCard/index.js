import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Text, Card, CardBody, CardFooter, Box } from "grommet";
import { Checkmark, Spa } from "grommet-icons";

const colors = {
  "Black Tea": "#6F7269",
  "Green Tea": "#749A5C",
  Rooibos: "#FC6161",
  "Oolong Tea": "#FFBC44",
  "White Tea": "#FBFBF7",
  Herbal: "#A2065A",
};

const PantryShelfTeaCard = ({ cardData, canSelect, canDelete, setItem, item }) => {

  const handleSelect = () => {
    if (canSelect) {
      if (item?._id === cardData._id) {
        setItem()
      } else {
        setItem(cardData)
      }
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
          {canSelect && item?._id === cardData._id && 
          <Box style={{ position: "absolute", top: "5px", right:"5px"}}>
            <Checkmark />
          </Box>}
          <Spa size="medium" />
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
