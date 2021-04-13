import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Spinner, Box, Button, Layer, Heading } from "grommet";
import { AddCircle, FormClose } from "grommet-icons";

import { QUERY_ME } from '../../utils/queries'

import NewTea from '../../components/NewTea'
import NewExtra from '../../components/NewExtra'
import PantryShelf from "../../components/PantryShelf";
import Notification from "../../components/Notification";

const Pantry = () => {

  const { loading, data } = useQuery(QUERY_ME)
  
  const [show, setShow] = useState({ content: '', show: false })
  const [addNotification, setAddNotification] = useState({show: false, type: '', message: ''})

  return (
    <Grommet>
      {
        addNotification.show && 
        <Notification setAddNotification={setAddNotification} addNotification={addNotification} />
      }
      {
        show.show && 
        <Layer full={true} margin={{vertical: "30px", horizontal: "100px"}} content={show.content}>
          <Box margin="medium" overflow="auto">
            <Box style={{minHeight: "unset"}} direction="row" justify="end">
              <Button style={{padding: "0"}} icon={<FormClose size="35px" />} onClick={() => setShow(false)} />
            </Box>
            {show.content === 'NewTea' ? <NewTea setAddNotification={setAddNotification} /> : <NewExtra setAddNotification={setAddNotification} />}
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
          <PantryShelf shelfName="Tea" pantryData={data?.me.teas} canDelete={true} canSelect={false} setAddNotification={setAddNotification} />

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
          <PantryShelf shelfName="Extra" pantryData={data?.me.extras}  canDelete={true} canSelect={false} setAddNotification={setAddNotification} />
          </>
        }
      </Main>
    </Grommet>
  );
}

export default Pantry;