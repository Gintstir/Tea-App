import React from "react";
import { Spa } from "grommet-icons";
import { Box, Card, CardBody, CardFooter, Grid, Grommet, Text } from "grommet";

const recipeData = [
  {
    type: "Black tea",
    extra: "milk, sweetener, and/or lemon",
    temperature: "scalding (212)",
    steepTime: "2:30",
    note:
      "Black teas undergo the most dramatic metamorphosis from harvest to consumer of the teas. They require more heat and time to show their flavor, but keep an eye out for oversteeping. If your brew is turning bitter you will want to take a few seconds off of your steep time. Flavored black teas may benefit from steep times as long as 5 minutes. Milk and sugar can balance out a more robust brew.",
  },
  {
    type: "Green tea",
    extra: "lemon (if iced), soy milk (if iced), sugar",
    temperature: "quite warm (150)-quite hot (175)",
    steepTime: "45 seconds- 1:30",
    note:
      "Green teas are typically dried, shaped, then heated (steamed pan fried, or roasted). This is not a lot of processing for tea so Green Tea's flavors are readily available. When brewed with caution, they have little to no bitterness, a delightful chlorophyll tang, and flavors evocative of all green plant life from hops to grass.",
  },
  {
    type: "Oolong tea",
    extra: "quite hot(175)-scalding(212)",
    temperature: "212",
    steepTime: "2-5 minute(s)",
    note:
      "Oolong teas are chameleons with flavors that straddle green and black teas. They have a golden hue that ranges from a soft dawn to a robust marigold. Each Oolong will be steeped a little differently, but a good rule of thumb is to steep blade shaped teas for about 2 minutes, twisted teas for about 3 minutes, and furled/balled teas for about 5 minutes. The more tightly coiled oolong tea is, the more brews you can get out of it! Additional brews benefit from longer steep times and hotter water.",
  },
  {
    type: "White tea",
    extra: "sugar (when cold)",
    temperature: "quite warm (150)-quite hot(175)",
    steepTime: "1-2 minutes",
    note:
      "White Teas have the most subtle palate of all preparations of tea. It is usually only shaped and dried. Certain exquisite white teas are only harvested at particular times and their rarity and quality are denoted by their flush. A first flush white tea picked at the peak of the season can and should run you a pretty penny. Flavored white teas are a great entry point for new drinkers because they are typically a little less expensive and provide more of a story for your palate while you hone in on what you like from a white tea.",
  },
  {
    type: "Herbal",
    extra: "sugar or lemon. milk may curdle!",
    temperature: "scalding (212)",
    steepTime: "3-10 minutes",
    note:
      "It is best practice, especially if you are steeping for health benefits, to follow the instructions on the packaging for steeping herbs. It is worth noting that while decaffeinated teas have small amounts of caffeine, herbal infusions do not contain tea leaves so they can be absolutely caffeine free. Always read the package because certain popular herbs contain extraordinary amounts of caffeine.",
  },
  {
    type: "Rooibos Brews",
    extra: "sugar, lemon, milk",
    temperature: "scalding (212)",
    steepTime: "4 minutes to all day",
    note:
      "Rooibos infusions have a robust flavor with little tannins that lends itself to additions. They are completely caffeine free, and a worthy pursuit for anyone looking to drink a nuanced brew without increasing their heart rate. You can steep them like a regular tea or try putting the shavings directly in your kettle and boiling the water whenever you would like a fresh pot.",
  },
];

const data = [
  {
    color: "black",
    icon: <Spa size="large" />,
    message: "Black Tea",
  },
  {
    color: "green",
    icon: <Spa size="large" />,
    message: "Green Tea",
  },
  {
    color: "white",
    icon: <Spa size="large" />,
    message: "White Tea",
  },
  {
    color: "oolong",
    icon: <Spa size="large" />,
    message: "Oolong Tea",
  },
  {
    color: "herbal",
    icon: <Spa size="large" />,
    message: "Herbal Infusion",
  },
  {
    color: "rooibos",
    icon: <Spa size="large" />,
    message: "Rooibos",
  },
];

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

const populateCard = (clickedColor) => {
  console.log(clickedColor, recipeData);
};

export const TeaButtons = (props) => (
  <Grommet theme={theme} full>
    <Box pad="small">
      {/* Responsive Grid */}
      <Grid gap="small" rows="small" columns={{ count: "fit", size: "xsmall" }}>
        {data.map((value) => (
          <Card
            height="150px"
            width="150px"
            background={value.color}
            key={value.message}
            onClick={populateCard(value.color)}
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

export default TeaButtons;
