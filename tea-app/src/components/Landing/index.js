import React from "react";
import TeaButtons from "../TeaButtons/index";

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Card } from "grommet";

const Landing = () => (
  <Grommet>
    <Header background="light-4" pad="small">
      <Text size="large">About Me</Text>
    </Header>
    <Main pad="small">This will become our landing page, how thrilling!</Main>
    <Card> I will be a dynamically generated teacard! oooooo!</Card>
    <div>
      <TeaButtons />
    </div>
  </Grommet>
);

export default Landing;
