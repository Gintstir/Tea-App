import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Text, Card, CardBody } from "grommet";

const PantryShelfExtraCard = ({ cardData }) => {
  return (
    <Grommet>
      {/* make background equal to user's selection for teatype */}
      <Card height="xsmall" width="xsmall" background="light-1">
        <CardBody fill="vertical" justify="center" align="center">
          <Text textAlign="center">{cardData}</Text>
        </CardBody>
      </Card>
    </Grommet>
  );
};

export default PantryShelfExtraCard;
