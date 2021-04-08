import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text } from "grommet";

const Brew = () => (
  <Grommet>
    <Header background="light-4" pad="small">
      <Text size="large">About Me</Text>
    </Header>
    <Main pad="small">This is where users will brew teas, how thrilling!</Main>
  </Grommet>
);

export default Brew;
