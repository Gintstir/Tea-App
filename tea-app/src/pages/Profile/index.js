import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Spinner, Layer, Box, Button } from "grommet";
import { FormClose } from "grommet-icons";

import { QUERY_ME } from '../../utils/queries'
import NewRecipe from "../../components/NewRecipe";

const Profile = ({profile}) => {

  const [show, setShow] = useState(false)

  const { loading } = useQuery(QUERY_ME)

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
          <Box pad={{ left: "large", right: "large", top: "35px", bottom: "35px"}}  overflow={{vertical: "auto"}}>
            <Box style={{minHeight: "unset"}} direction="row" justify="end">
              <Button style={{padding: "0"}} icon={<FormClose size="35px" />} onClick={() => setShow(false)} />           
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
