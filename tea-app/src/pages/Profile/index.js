import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Spinner, Layer, Box, Button } from "grommet";
import { FormClose } from "grommet-icons";

import { QUERY_ME } from '../../utils/queries'
import NewRecipe from "../../components/NewRecipe";

const Profile = ({ profile }) => {

  const [show, setShow] = useState(false)

  const { data, loading } = useQuery(QUERY_ME)

  const { teas, extras, recipes } = data?.me || {}

  const toggleNewRecipe = () => {
    setShow(true)
  }

  if (loading) {
    return <Spinner />
  }
  return (
    <Grommet>
      { 
        show && 
        <Layer  full={true} margin={{vertical: "30px", horizontal: "100px"}}>
          <Box pad={{vertical: "35px"}} overflow={{vertical: "auto"}}>
            <Box pad={{right: "large"}}  style={{minHeight: "unset"}} direction="row" justify="end">
              <Button style={{padding: "0"}} icon={<FormClose size="35px" />} onClick={() => setShow(false)} />           
            </Box>
            <NewRecipe setShow={setShow} teas={teas} extras={extras} />        
          </Box>
        </Layer>
      }
      <Button style={{fontFamily: "Abhaya Libre"}} onClick={toggleNewRecipe} label="Add Recipe" />
    </Grommet>
  );
}

export default Profile;
