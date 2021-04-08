import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text } from "grommet";

const SignIn = () => (
  <Grommet>
    <Header background="light-4" pad="small">
      <Text size="large">About Me</Text>
    </Header>
    <Main pad="small">
      This is where our users will sign in, how thrilling!
    </Main>
  </Grommet>
);

export default SignIn;
