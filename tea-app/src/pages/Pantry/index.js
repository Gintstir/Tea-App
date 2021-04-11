import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Spinner, Box, Button, Layer } from "grommet";

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
        <Layer content={show.content}>
          <Box margin="medium">
            <Box direction="row" justify="end">
              <Button fill={false} onClick={() => setShow({ content: '', show: false })} >
                <FormClose />
              </Button>               
            </Box>
            {show.content === 'NewTea' ? <NewTea /> : <NewExtra />}           
          </Box>
        </Layer>
      }
      <Header background="light-4" pad="small">
        <Text size="large">Your Pantry</Text>
      </Header>
      <Main>
        { loading ? 
          <Spinner /> :
          <Box>
            <PantryShelf shelfName="Extra" setShow={setShow} pantryData={data?.me} />
            <PantryShelf shelfName="Tea" setShow={setShow} pantryData={data?.me} />
          </Box>
        }
      </Main>
    </Grommet>
  );
}

export default Pantry;