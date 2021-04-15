import React from "react";

import { Box, Card, CardBody, CardFooter, Grommet, Text } from "grommet";

import data from "../../utils/tea-types";
import { Checkmark } from "grommet-icons";

const theme = {
  global: {
    font: {
      family: `Abhaya Libre`,
    },
    colors: {
      black: "#6F7269",
      green: "#749A5C",
      rooibos: "#FC6161",
      oolong: "#FFBC44",
      white: "#FBFBF7",
      herbal: "#A2065A",
      yellow: "#FFEB59",
    },
  },
  card: {
    footer: {
      pad: { horizontal: "small", vertical: "small" },
      background: "#FFFFFF27",
    },
  },
};

const TeaButtons = ({ selectedTea, setSelectedTea, cardHeight, cardWidth }) => {

  const populateCard = (clickedTea) => {
    if (clickedTea.color === selectedTea.color) {
      setSelectedTea({})
      return
    }
    setSelectedTea(clickedTea);
  };

  return (
    <Grommet theme={theme} >
      {/* Responsive Grid */}
      <div className="row">
        {data.map((value) => (
          <Box className="col s6 m4 l2" justify="center" align="center" key={value.name}>
            <Card
              margin="12px"
              style={{
                width: "100%",
                minWidth: `${cardWidth*.667}px`,
                maxWidth: `${cardWidth*1.33}px`,
                height: `${cardHeight}px`
              }}
              background={value.color}
              onClick={() => populateCard(value)}
            >
              <CardBody style={{position: "relative"}} pad="small" align="center" justify="center">
                { selectedTea.color === value.color &&
                <Box style={{ position: "absolute", top: "5px", right:"5px"}}>
                  <Checkmark />
                </Box>}
                {value.icon}
              </CardBody>
              <CardFooter justify="center">
                <Text size="medium" weight="bold" textAlign="center">
                  {value.name}
                </Text>
              </CardFooter>
            </Card>                         
          </Box>
        ))}          
      </div>
    </Grommet>
  );
};

export default TeaButtons;
