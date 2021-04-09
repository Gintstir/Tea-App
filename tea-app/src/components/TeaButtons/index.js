import React from "react";
import {
  Location,
  System,
  ShieldSecurity,
  Tasks,
  User,
  Wifi,
} from "grommet-icons";
import { Box, Card, CardBody, CardFooter, Grid, Grommet, Text } from "grommet";

const data = [
  {
    color: "black",
    icon: <Wifi size="large" />,
    message: "Black Tea",
  },
  {
    color: "green",
    icon: <System size="large" />,
    message: "Green Tea",
  },
  {
    color: "white",
    icon: <User size="large" />,
    message: "White Tea",
  },
  {
    color: "oolong",
    icon: <Tasks size="large" />,
    message: "Oolong Tea",
  },
  {
    color: "herbal",
    icon: <Location size="large" />,
    message: "Herbal Infusion",
  },
  {
    color: "rooibos",
    icon: <ShieldSecurity size="large" />,
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
            // onClick={() => props.generateTeaCard(value.message)}
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
