import React, { useState } from "react";
import TeaButtons from "../../components/TeaButtons";
import TeaCard from "../../components/MaterializeTeaCard";

// import { grommet } from "grommet/themes";
import { Grommet, Main, Card } from "grommet";

import recipeData from "../../utils/default-recipes";

const Landing = () => {
  const [selectedTea, setSelectedTea] = useState({});

  const foundRecipe = recipeData.find(
    (recipe) => recipe.name === selectedTea?.color
  );

  return (
    <Grommet>
      
      <Main pad="small" direction="row-reverse" margin={{right: "50px"}} style={{ fontFamily: "Marck Script" }}>
        All things in due time
      </Main>
      
      <div>
        <TeaButtons selectedTea={selectedTea} setSelectedTea={setSelectedTea} cardHeight={150} cardWidth={150} />
      </div>
      <Card>
        <TeaCard selectedTea={foundRecipe} />
      </Card>
    </Grommet>
  );
};

export default Landing;
