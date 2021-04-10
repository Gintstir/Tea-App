import React from "react";
import TeaButtons from "../TeaButtons/index";

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Card } from "grommet";

const Landing = () => (
  <Grommet>
    <Header background="light-4" pad="small">
      <Text size="large" style={{ fontFamily: "Homemade Apple" }}>
        Steep
      </Text>
    </Header>
    <Main pad="small">All things in due time</Main>
    <Card> I will be a dynamically generated teacard! oooooo!</Card>
    <div>
      <TeaButtons />
    </div>
  </Grommet>
);

export default Landing;
