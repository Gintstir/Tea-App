import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text } from "grommet";

const NavBar = () => (
  <Grommet>
    <Header background="light-4" pad="small">
      <Text size="large">About Me</Text>
    </Header>
    <Main pad="small">
      This is where we'll be building a NavBar...once we figure out what it does{" "}
    </Main>
  </Grommet>
);

export default NavBar;
