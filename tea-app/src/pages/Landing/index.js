import React, { useState } from "react";
import TeaButtons from "../../components/TeaButtons";
import TeaCard from "../../components/MaterializeTeaCard";

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Card } from "grommet";

const Landing = () => {
  const [selectedTea, setSelectedTea] = useState({});

  return (
    <Grommet>
      <Header background="light-4" pad="small">
        <Text size="xlarge" style={{ fontFamily: "Homemade Apple" }}>
          Steep
        </Text>
      </Header>
      <Main pad="small" style={{ fontFamily: "Marck Script" }}>
        All things in due time
      </Main>
      <Card>
        <TeaCard selectedTea={selectedTea} />
      </Card>
      <div>
        <TeaButtons setSelectedTea={setSelectedTea} />
      </div>
    </Grommet>
  );
};

export default Landing;
