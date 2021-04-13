import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Spinner, Layer, Box, Button } from "grommet";
import { FormClose } from "grommet-icons";

import { QUERY_ME } from '../../utils/queries'
import NewRecipe from "../../components/NewRecipe";
import RecipeCard from "../../components/RecipeCard";

const Profile = () => {

  const [show, setShow] = useState(false)

  const { data, loading } = useQuery(QUERY_ME)

  const toggleNewRecipe = () => {
    setShow(true)
  }

  const { teas, extras, recipes } = data?.me || {}
  
  console.log(recipes)
  
  if (!recipes || loading) {
    return <Spinner />
  }
  

  return (
    <Grommet>
      { 
        show && 
        <Layer full={true} margin={{vertical: "30px", horizontal: "100px"}}>
          <Box pad={{vertical: "35px"}} overflow={{vertical: "auto"}}>
            <Box pad={{right: "large"}}  style={{minHeight: "unset"}} direction="row" justify="end">
              <Button style={{padding: "0"}} icon={<FormClose size="35px" />} onClick={() => setShow(false)} />           
            </Box>
            <NewRecipe setShow={setShow} teas={teas} extras={extras} />        
          </Box>
        </Layer>
      }
      <Button style={{fontFamily: "Abhaya Libre"}} onClick={toggleNewRecipe} label="Add Recipe" />
      <Box fill={true} direction="column" align="center">
        {
          recipes.map(recipe => (
            <RecipeCard recipe={recipe} key={recipe._id} />
          ))
        }        
      </Box>

    </Grommet>
  );
}

export default Profile;
