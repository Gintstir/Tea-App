import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Text, Card, CardBody, CardFooter } from "grommet";
import { Spa } from "grommet-icons";

const colors = {
  "Black Tea": "#6F7269",
  "Green Tea": "#749A5C",
  Rooibos: "#FC6161",
  "Oolong Tea": "#FFBC44",
  "White Tea": "#FBFBF7",
  Herbal: "#A2065A",
};

const PantryShelfTeaCard = ({ cardData }) => {
  return (
    <Grommet>
      {/* make background equal to user's selection for teatype */}
      <Card
        height="125px"
        width="125px"
        background={colors[cardData.type] || "light-1"}
      >
        <CardBody fill="vertical" justify="center" align="center">
          {typeof cardData === "string" ? (
            <Text textAlign="center"> {cardData}</Text>
          ) : (
            <>
              <Spa size="medium" />
              <Text textAlign="center"> {cardData.name}</Text>
            </>
          )}
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
