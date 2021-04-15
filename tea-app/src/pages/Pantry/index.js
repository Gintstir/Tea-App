import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Spinner, Box, Button, Layer, Heading, grommet } from "grommet";

import {deepMerge} from 'grommet/utils';

import { AddCircle, FormClose } from "grommet-icons";

import { QUERY_ME } from '../../utils/queries'

import NewTea from '../../components/NewTea'
import NewExtra from '../../components/NewExtra'
import PantryShelf from "../../components/PantryShelf";
import Notification from "../../components/Notification";

const customTheme = deepMerge(grommet, {
  global: {
    font: {
        family: `Abhaya Libre`,
    },
  },
})

const Pantry = () => {

  const { loading, data } = useQuery(QUERY_ME)
  
  const [show, setShow] = useState({ content: '', show: false })
  const [addNotification, setAddNotification] = useState({show: false, type: '', message: ''})

  return (
    <Grommet theme={customTheme}>
      {
        addNotification.show && 
        <Notification setAddNotification={setAddNotification} addNotification={addNotification} />
      }
      {
        show.show && 
        <Layer full={true} responsive={false} margin={{vertical: "small", horizontal: "small"}} content={show.content}>
          <Box margin="medium" overflow="auto">
            <Box style={{minHeight: "unset"}} direction="row" justify="end">
              <Button style={{padding: "0"}} icon={<FormClose size="35px" />} onClick={() => setShow(false)} />
            </Box>
            {show.content === 'NewTea' ? <NewTea setAddNotification={setAddNotification} /> : <NewExtra setAddNotification={setAddNotification} />}
          </Box>
        </Layer>
      }
      <Header background="light-4" pad="small">
        <Text size="large">Your Pantry</Text>
      </Header>
      <Main margin={{bottom: "35px"}}>
        { loading ? 
          <Box fill="horizontal" height="medium" direction="column" align="center" justify="center">
            <Heading style={{fontFamily: "Abhaya Libre"}} level="2">Your pantry is opening...</Heading>
            <Spinner color="purple" size="large" />
          </Box> :
          <>
          <Box direction="row" pad="xsmall">
            <Heading level={3} margin={{ left: "small", bottom: "none" }}>
              Teas
            </Heading>
          </Box>
          <Box>
            <Button               
              alignSelf="start"
              margin="small"
              onClick={() => setShow({ content: `NewTea`, show: true })}
              focusIndicator={false}
              style={{background: "none"}}
            >
              <AddCircle size="small" /> Add Tea
            </Button>
          </Box>
          <PantryShelf shelfName="Tea" pantryData={data?.me.teas} canDelete={true} canSelect={false} setAddNotification={setAddNotification} />

          <Box>
            <Box direction="row" pad="xsmall">
            <Heading level={3} margin={{ left: "small", bottom: "none" }}>
              Extras
            </Heading>
          </Box>
            <Button                           
              alignSelf="start"
              margin="small"
              onClick={() => setShow({ content: `NewExtra`, show: true })}
              focusIndicator={false}
              style={{background: "none"}}
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