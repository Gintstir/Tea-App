import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Text, Card, CardBody } from "grommet";

const PantryShelfCard = ({ cardData }) => {

    return (
        <Grommet>
            <Card  height="xsmall" width="xsmall" background="light-1">
                <CardBody fill="vertical" justify="center" align="center">
                    {
                        typeof(cardData) === 'String' ?
                        <Text textAlign="center">{cardData}</Text> :
                        <Text textAlign="center">{cardData.name}</Text>
                    }
                </CardBody>
            </Card>
        </Grommet>
    );
}

export default PantryShelfCard;