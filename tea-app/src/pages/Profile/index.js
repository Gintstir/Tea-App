import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Spinner, Accordion, AccordionPanel, Heading, Box, Grid, Button, Layer } from "grommet";

import { QUERY_ME } from '../../utils/queries'
import { Add, FormClose } from "grommet-icons";

import NewTea from '../../components/NewTea'
import NewExtra from '../../components/NewExtra'

const Profile = ({profile}) => {

  const { loading, data } = useQuery(QUERY_ME)
  
  const [show, setShow] = useState({ content: '', show: false })

  console.log(data)

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
        <Text size="large">{profile.data.username}'s Profile</Text>
      </Header>
      <Main pad="small">
        { loading ? 
          <Spinner /> :
          <Accordion>
            <AccordionPanel label="Pantry">
              <Box>
                <Box direction="row" pad="xsmall">
                  <Heading level={3}>Tea Shelf</Heading>
                  <Button margin="small" secondary onClick={() => setShow({content: 'NewTea', show: true})}><Add size="small" /> Add Tea</Button>
                </Box>
                <Box overflow={{horizontal: "auto"}}>
                  <Grid gap="small" columns={{ count: data?.me.teas.length, size: "xsmall" }}>
                    {
                      data?.me.teas.length ?
                      data?.me.teas.map(tea => (
                        <div key={tea._id}>
                          <p>{tea.name}</p>
                        </div>
                      )) :
                      "Add a Tea"
                    }
                  </Grid>
                </Box>
              </Box>
              <Box>
                <Box direction="row" pad="xsmall">
                  <Heading level={3}>Extras</Heading>
                  <Button margin="small" secondary onClick={() => setShow({content: 'NewExtra', show: true})}><Add size="small" /> Add Extra</Button>
                </Box>
                <Box overflow={{horizontal: "auto"}}>
                  <Grid gap="small" columns={{ count: data?.me.extras.length, size: "xsmall" }}>
                    {
                      data?.me.extras.map(extra => (
                        <div key={extra}>
                          <p>{extra}</p>
                        </div>
                      ))
                    }
                  </Grid>                  
                </Box>
              </Box>
            </AccordionPanel>
          </Accordion>
        }
      </Main>
    </Grommet>
  );
}

export default Profile;
