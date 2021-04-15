import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Spinner, Layer, Box, Button, Header, Text, Heading } from "grommet";
import { AddCircle, FormClose } from "grommet-icons";

import { QUERY_ME } from '../../utils/queries'

import NewRecipe from "../../components/NewRecipe";
import RecipeCard from "../../components/RecipeCard";
import Notification from '../../components/Notification'

const Profile = () => {

  const [show, setShow] = useState(false)
  const [loadingRecipe, setLoadingRecipe] = useState(false)
  const [addNotification, setAddNotification] = useState({show: false, type: '', message: ''})

  const { data, loading } = useQuery(QUERY_ME)

  const toggleNewRecipe = () => {
    setShow(true)
  }

  const { teas, extras, recipes } = data?.me || {}
  
  if (!recipes || loading) {
    return (
    <Box fill="horizontal" height="medium" direction="column" align="center" justify="center">
      <Heading style={{fontFamily: "Abhaya Libre"}} level="2">Your teas are brewing...</Heading>
      <Spinner color="purple" size="large" />
    </Box>
    )
  }

  return (
    <Grommet>
      {
        addNotification.show && 
        <Notification setAddNotification={setAddNotification} addNotification={addNotification} />
      }
      <Header background="light-4" pad="small">
        <Text style={{fontFamily: "Abhaya Libre"}} size="large">Your Tea Room</Text>
      </Header>
      { 
        show && 
        <Layer full={true} responsive={false} margin={{vertical: "small", horizontal: "small"}}>
          <Box pad={{top: "25px"}} overflow={{vertical: "auto"}}>
            <Box pad={{right: "large"}}  style={{minHeight: "unset"}} direction="row" justify="end">
              <Button style={{padding: "0"}} icon={<FormClose size="35px" />} onClick={() => setShow(false)} />           
            </Box>
            <NewRecipe setAddNotification={setAddNotification} setShow={setShow} teas={teas} extras={extras} setLoadingRecipe={setLoadingRecipe} />        
          </Box>
        </Layer>
      }
      <Box margin={{vertical: "30px", horizontal: "80px"}}>
        <Button alignSelf="center" pad="large" style={{fontFamily: "Abhaya Libre"}} color="purple" onClick={toggleNewRecipe} label="Add Recipe" icon={<AddCircle />} />  
      </Box>
      <Box direction="column" align="center" margin={{horizontal: "30px"}}>
        {
          !recipes.length ? 
          <Heading style={{fontFamily: "Abhaya Libre"}} level="2">Nothing to Steep yet...</Heading> :
          <>
            {loadingRecipe && (
              <Box fill="horizontal" height="small" direction="column" align="center" justify="center">
                <Heading style={{fontFamily: "Abhaya Libre"}} level="2">Your new recipe is Steeping...</Heading>
                <Spinner color="purple" size="large" />
              </Box>              
            )}
            {recipes.map(recipe => <RecipeCard setAddNotification={setAddNotification} recipe={recipe} canDelete={true} teaCardHeight="125px" displayFooter={true} key={recipe._id} />)}
          </>
        }        
      </Box>
    </Grommet>
  );
}

export default Profile;
