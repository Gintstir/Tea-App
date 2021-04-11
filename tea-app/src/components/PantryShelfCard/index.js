import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Text, Card, CardBody } from "grommet";

const colors = {
  black: "#6F7269",
  green: "#749A5C",
  rooibos: "#FC6161",
  oolong: "#FFBC44",
  white: "#FBFBF7",
  herbal: "#A2065A",
};

const PantryShelfCard = ({ cardData }) => {
  return (
    <Grommet>
      {/* make background equal to user's selection for teatype */}
      <Card height="xsmall" width="xsmall" background="light-1">
        <CardBody fill="vertical" justify="center" align="center">
          {typeof cardData === "string" ? (
            <Text textAlign="center">{cardData}</Text>
          ) : (
            <Text textAlign="center">{cardData.name}</Text>
          )}
        </CardBody>
      </Card>
    </Grommet>
  );
};

export default PantryShelfCard;
