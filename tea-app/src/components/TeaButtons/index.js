import React from "react";

import { Box, Card, CardBody, CardFooter, Grid, Grommet, Text } from "grommet";

import data from "../../utils/tea-types";
import recipeData from "../../utils/default-recipes";

const theme = {
  global: {
    font: {
      family: `-apple-system,
         BlinkMacSystemFont, 
         "Segoe UI"`,
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
      pad: { horizontal: "medium", vertical: "small" },
      background: "#FFFFFF27",
    },
  },
};

const Identifier = ({ children, size, ...rest }) => (
  <Box gap="small" align="center" {...rest}>
    {children}
    <Box></Box>
  </Box>
);

const TeaButtons = ({ setSelectedTea }) => {
  const populateCard = (clickedColor) => {
    const foundRecipe = recipeData.find(
      (recipe) => recipe.name === clickedColor
    );
    setSelectedTea(foundRecipe);
  };

  return (
    <Grommet theme={theme} full>
      <Box pad="small">
        {/* Responsive Grid */}
        <Grid
          gap="small"
          rows="small"
          columns={{ count: "fit", size: "xsmall" }}
        >
          {data.map((value) => (
            <Card
              height="150px"
              width="150px"
              background={value.color}
              key={value.message}
              onClick={() => populateCard(value.color)}
            >
              <CardBody pad="small">
                <Identifier pad="small" size="small" align="center">
                  {value.icon}
                </Identifier>
              </CardBody>
              <CardFooter pad={{ horizontal: "medium", vertical: "small" }}>
                <Text size="small" weight="bold">
                  {value.message}
                </Text>
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Box>
    </Grommet>
  );
};

export default TeaButtons;
