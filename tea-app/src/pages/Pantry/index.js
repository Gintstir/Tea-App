import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Spinner, Box, Button, Layer, Heading } from "grommet";
import { AddCircle } from "grommet-icons";

import { QUERY_ME } from '../../utils/queries'
import { FormClose } from "grommet-icons";

import NewTea from '../../components/NewTea'
import NewExtra from '../../components/NewExtra'
import PantryShelf from "../../components/PantryShelf";

const Pantry = () => {

  const { loading, data } = useQuery(QUERY_ME)
  
  const [show, setShow] = useState({ content: '', show: false })

  return (
    <Grommet>
      {
        show.show && 
        <Layer full={true} margin={{vertical: "30px", horizontal: "100px"}} content={show.content}>
          <Box margin="medium" overflow="auto">
            <Box style={{minHeight: "unset"}} direction="row" justify="end">
              <Button style={{padding: "0"}} icon={<FormClose size="35px" />} onClick={() => setShow(false)} />
            </Box>
            {show.content === 'NewTea' ? <NewTea /> : <NewExtra />}
          </Box>
        </Layer>
      }
      <Header background="light-4" pad="small">
        <Text style={{fontFamily: "Abhaya Libre"}} size="large">Your Pantry</Text>
      </Header>
      <Main margin={{bottom: "35px"}}>
        { loading ? 
          <Spinner /> :
          <>
          <Box direction="row" pad="xsmall">
            <Heading style={{fontFamily: "Abhaya Libre"}} level={3} margin={{ bottom: "none" }}>
              Teas
            </Heading>
          </Box>
          <Box>
            <Button
              style={{fontFamily: "Abhaya Libre"}} 
              alignSelf="start"
              margin="small"
              onClick={() => setShow({ content: `NewTea`, show: true })}
            >
              <AddCircle size="small" /> Add Tea
            </Button>
          </Box>
          <PantryShelf shelfName="Tea" pantryData={data?.me.teas} canDelete={true} canSelect={false} />

          <Box>
            <Box direction="row" pad="xsmall">
            <Heading style={{fontFamily: "Abhaya Libre"}} level={3} margin={{ bottom: "none" }}>
              Extras
            </Heading>
          </Box>
            <Button
              style={{fontFamily: "Abhaya Libre"}} 
              alignSelf="start"
              margin="small"
              onClick={() => setShow({ content: `NewExtra`, show: true })}
            >
              <AddCircle size="small" /> Add Extra
            </Button>
          </Box>
          <PantryShelf shelfName="Extra" pantryData={data?.me.extras}  canDelete={true} canSelect={false} />
          </>
        }
      </Main>
    </Grommet>
  );
}

export default Pantry;