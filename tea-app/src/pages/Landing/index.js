import React from "react";
import TeaButtons from "../../components/TeaButtons";
import TeaCard from "../../components/MaterializeTeaCard";

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Card } from "grommet";

const Landing = () => (
  <Grommet>
    <Header background="light-4" pad="small">
      <Text size="xlarge" style={{ fontFamily: "Homemade Apple" }}>
        Steep
      </Text>
    </Header>
    <Main pad="small" style={{ fontFamily: "Marck Script" }}>
      All things in due time
    </Main>
    <Card id="landingCard" style={{ fontFamily: "Nothing You Could Do" }}>
      I will be a dynamically generated teacard! oooooo!
    </Card>
    <div>
      <TeaCard />
    </div>
    <div>
      <TeaButtons />
    </div>
  </Grommet>
);

export default Landing;