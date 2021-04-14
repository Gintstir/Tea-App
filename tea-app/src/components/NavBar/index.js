import React from "react";

// import { grommet } from "grommet/themes";
import { Button, Grommet, grommet, Text, Header, Box } from "grommet";
import { Drawer, Home, Login, Logout } from "grommet-icons";
import { Link } from "react-router-dom";
import { deepMerge } from "grommet/utils";

import Auth from "../../utils/auth";

const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      // Setting new colors
      blue: "#00C8FF",
      black: "6F7269",
      green: "#749A5C",
      roobois: "#FC6161",
      purple: "#A2065A",
      white: "#FBFBF7",
      red: "#EE6373",
      orange: "#FFBC44",
      yellow: "#FFEB59",
    },
  },
});

const NavBar = ({ isLoggedin }) => {
  const handleLogout = () => {
    Auth.logout();
  };

  return (
    <Grommet theme={customTheme}>
      <Header pad="small" background="red">
        <Box
          align="center"
          gap="small"
          justiy="center"
          direction="row"
          margin={{ left: "20px" }}
        >
          <Link to="/">
            <Home size="medium" color="orange" />
          </Link>
          {isLoggedin && (
            <Link to="/pantry">
              <Drawer size="medium" color="darkgreen" />
            </Link>
          )}
        </Box>
        <Box
          direction="row"
          gap="small"
          justify="center"
          style={{ style: "0 auto" }}
        >
          <Text
            size="3xl"
            color="black"
            style={{ margin: "0 auto", fontFamily: "Unica One" }}
          >
            STEEP
          </Text>
        </Box>
        <Box
          align="center"
          direction="row"
          gap="small"
          margin={{ right: "10px" }}
        >
          {isLoggedin ? (
            <Button margin={{ left: "auto" }} onClick={handleLogout}>
              <Logout size="medium" color="white" />
            </Button>
          ) : (
            <Link style={{ marginLeft: "auto" }} to="/signin">
              <Login size="medium" color="white" />
            </Link>
          )}
        </Box>
      </Header>
    </Grommet>
  );
};
export default NavBar;
