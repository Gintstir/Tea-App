import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Spinner, Layer, Box, Button } from "grommet";
import { FormClose } from "grommet-icons";

import { QUERY_ME } from '../../utils/queries'
import NewRecipe from "../../components/NewRecipe";

const Profile = ({profile}) => {

  const [show, setShow] = useState(false)

  const { data, loading } = useQuery(QUERY_ME)

  // const { teas, extras, recipes } = data?.me

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
        <Layer>
          <Box margin="medium" overflow={{vertical: "auto"}}>
            <Box direction="row" justify="end" margin={{bottom: "25px"}}>
              <Button fill={false} onClick={() => setShow(false)} >
                <FormClose />
              </Button>               
            </Box>
            <NewRecipe setShow={setShow} />         
          </Box>
        </Layer>
      }
      <Button onClick={toggleNewRecipe} label="Add Recipe" />
    </Grommet>
  );
}

export default Profile;
