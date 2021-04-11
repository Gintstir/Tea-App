import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Text, Card, CardBody, CardFooter } from "grommet";
import { Spa } from "grommet-icons";

const colors = {
  "black tea": "#6F7269",
  "green tea": "#749A5C",
  rooibos: "#FC6161",
  "oolong tea": "#FFBC44",
  "white tea": "#FBFBF7",
  herbal: "#A2065A",
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
