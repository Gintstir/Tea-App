import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Spinner, Layer, Box, Button, Header, Text } from "grommet";
import { AddCircle, FormClose } from "grommet-icons";

import { QUERY_ME } from '../../utils/queries'

import NewRecipe from "../../components/NewRecipe";
import RecipeCard from "../../components/RecipeCard";
import Notification from '../../components/Notification'

const Profile = () => {

  const [show, setShow] = useState(false)
  const [addNotification, setAddNotification] = useState({show: false, type: '', message: ''})

  const { data, loading } = useQuery(QUERY_ME)

  const toggleNewRecipe = () => {
    setShow(true)
  }

  const { teas, extras, recipes } = data?.me || {}
  
  if (!recipes || loading) {
    return <Spinner />
  }
  
  return (
    <Grommet>
      {
        addNotification.show && 
        <Notification setAddNotification={setAddNotification} addNotification={addNotification} />
      }
      <Header background="light-4" pad="small">
        <Text style={{fontFamily: "Abhaya Libre"}} size="large">Profile</Text>
      </Header>
      { 
        show && 
        <Layer full={true} margin={{vertical: "30px", horizontal: "100px"}}>
          <Box pad={{vertical: "35px"}} overflow={{vertical: "auto"}}>
            <Box pad={{right: "large"}}  style={{minHeight: "unset"}} direction="row" justify="end">
              <Button style={{padding: "0"}} icon={<FormClose size="35px" />} onClick={() => setShow(false)} />           
            </Box>
            <NewRecipe setAddNotification={setAddNotification} setShow={setShow} teas={teas} extras={extras} />        
          </Box>
        </Layer>
      }
      <Box margin={{vertical: "30px", horizontal: "80px"}}>
        <Button alignSelf="center" pad="large" style={{fontFamily: "Abhaya Libre"}} color="purple" onClick={toggleNewRecipe} label="Add Recipe" icon={<AddCircle />} />  
      </Box>
      <Box fill={true} direction="column" align="center">
        {
          recipes.map(recipe => (
            <RecipeCard setAddNotification={setAddNotification} recipe={recipe} key={recipe._id} />
          ))
        }        
      </Box>
    </Grommet>
  );
}

export default Profile;
