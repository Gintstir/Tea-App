import React, { useState } from "react";
import TeaButtons from "../../components/TeaButtons";
import TeaCard from "../../components/MaterializeTeaCard";

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Card } from "grommet";

import recipeData from "../../utils/default-recipes";

const Landing = () => {
  const [selectedTea, setSelectedTea] = useState({});

  const foundRecipe = recipeData.find(
    (recipe) => recipe.name === selectedTea?.color
  );

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
        <TeaCard selectedTea={foundRecipe} />
      </Card>
      <div>
        <TeaButtons selectedTea={selectedTea} setSelectedTea={setSelectedTea} cardHeight={150} cardWidth={150} />
      </div>
    </Grommet>
  );
};

export default Landing;
