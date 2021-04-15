import React from "react";

import { Box, Card, CardBody, CardFooter, CardHeader, Grommet, Heading, Text } from "grommet";

import { Checkmark } from "grommet-icons";

import tempOptions from '../../utils/temps'

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

const TempButtons = ({ selectedTemp, setSelectedTemp, cardHeight, cardWidth }) => {

  const populateCard = (clickedTemp) => {
    if (clickedTemp.temp === selectedTemp.temp) {
      setSelectedTemp({})
      return
    }
    setSelectedTemp(clickedTemp);
  };

  return (
    <Grommet theme={theme} >
      {/* Responsive Grid */}
      <div className="row">
        {tempOptions.map((value) => (
          <Box className="col s4 m2" justify="center" align="center" key={value.temp}>
            <Card
              margin="12px"
              style={{
                width: "100%",
                minWidth: `${cardWidth*.667}px`,
                maxWidth: `${cardWidth*1.33}px`
              }}
              // background={value.color}
              onClick={() => populateCard(value)}
            >
              <CardHeader direction="row" justify="end" margin={{top: "xsmall", right: "small"}}>
                { selectedTemp.temp === value.temp ?
                  <Checkmark size="16px" /> :
                  <Box height="16px" />
                }
              </CardHeader>
              <CardBody pad="xsmall" align="center" justify="center">
                <Heading level="3" margin="0">{value.temp} &deg;F</Heading>
              </CardBody>
              <CardFooter justify="center" pad={{bottom: 'xsmall'}}>
                <Text size="medium" textAlign="center">
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

export default TempButtons;
