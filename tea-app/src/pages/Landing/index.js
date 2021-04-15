import React, { useState } from "react";
import TeaButtons from "../../components/TeaButtons";

// import { grommet } from "grommet/themes";
import { Grommet, Main, Text, Box } from "grommet";
import { Drawer, Home, Login, Logout } from "grommet-icons";

import recipeData from "../../utils/default-recipes";
import RecipeCard from "../../components/RecipeCard";

const Landing = () => {
  const [selectedTea, setSelectedTea] = useState({});

  const foundRecipe = recipeData.find(
    (recipe) => recipe.tea.name === selectedTea?.name
  );

  return (
    <Grommet>
      <Box
        pad="small"
        direction="row"
        justify="center"
        margin="small"
        style={{ fontFamily: "Abhaya Libre" }}
      >
        <Text style={{fontStyle: 'italic'}}>All things in due time,</Text>
      </Box>
      <Main pad="large" style={{ fontFamily: "Abhaya Libre" }}>
        <Text>
          Welcome to <span style={{ fontFamily: "Unica One" }}> STEEP </span>.
          You can use this application to track your teas, pantry ingredients,
          and create recipe cards with notes for your brews. Click the <Login />
          /<Logout /> icon to log in and out, the <Home /> button to access your
          profile, and the <Drawer /> button to check out your tea shelf and
          pantry.
        </Text>
      </Main>
      <div>
        <TeaButtons
          selectedTea={selectedTea}
          setSelectedTea={setSelectedTea}
          cardHeight={150}
          cardWidth={150}
        />
      </div>
      <Box direction="column" align="center" margin={{horizontal: "30px"}}>
        {
          foundRecipe &&
          <RecipeCard recipe={foundRecipe} canDelete={false} teaCardHeight="75px" displayFooter={false} landingPage={true} />
        }        
      </Box>
    </Grommet>
  );
};

export default Landing;
