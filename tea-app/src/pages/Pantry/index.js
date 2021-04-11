import React, { useState } from "react";
import { useQuery } from '@apollo/react-hooks'

// import { grommet } from "grommet/themes";
import { Grommet, Header, Main, Text, Spinner, Heading, Box, Grid, Button, Layer, Card, CardBody } from "grommet";

import { QUERY_ME } from '../../utils/queries'
import { Add, FormClose } from "grommet-icons";

import TeaShelf from '../../assets/images/TeaShelf.png'
import './pantry.css'

import NewTea from '../../components/NewTea'
import NewExtra from '../../components/NewExtra'

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
        <Text size="large">{data?.me.username}'s Profile</Text>
      </Header>
      <Main>
        { loading ? 
          <Spinner /> :
          <Box>
            <Box>
                <Box direction="row" pad="xsmall">
                    <Heading level={3}>Tea Shelf</Heading>
                    <Button margin="small" secondary onClick={() => setShow({content: 'NewTea', show: true})}><Add size="small" /> Add Tea</Button>
                </Box>
                <Box overflow={{horizontal: "auto"}}>
                    <Grid margin={{right: "auto", left: "15px"}} gap="small" justify="start" columns={{ count: data?.me.teas.length, size: "xsmall" }} style={{zIndex: 5}}>
                    {
                        data?.me.teas.length ?
                        data?.me.teas.map(tea => (
                            <Card  height="xsmall" width="xsmall" background="light-1" key={tea._id}>
                                <CardBody fill="vertical" justify="center" align="center">
                                    <Text textAlign="center">{tea.name}</Text>
                                </CardBody>
                            </Card>
                        )) :
                        "Add a Tea"
                    }
                    </Grid>
                    <div className="tea-shelf-container">
                        <div className='tea-shelf' style={{backgroundImage: `url(${TeaShelf})`}}></div>
                    </div>
                </Box>
            </Box>
            <Box>
                <Box direction="row" pad="xsmall">
                    <Heading level={3}>Extras</Heading>
                    <Button margin="small" secondary onClick={() => setShow({content: 'NewExtra', show: true})}><Add size="small" /> Add Extra</Button>
                </Box>
                <Box overflow={{horizontal: "auto"}}>
                    <Grid margin={{right: "auto"}} pad={{right: "15px", left: "15px"}} gap="small" justify="start" columns={{ count: data?.me.extras.length, size: "xsmall" }} style={{zIndex: 5}}>
                    {
                        data?.me.extras.length ?
                        data?.me.extras.map(extra => (
                            <Card  height="xsmall" width="xsmall" background="light-1" key={extra}>
                                <CardBody fill="vertical" justify="center" align="center">
                                    <Text textAlign="center">{extra}</Text>
                                </CardBody>
                            </Card>
                        )) :
                        "Add an Extra"
                    }
                    </Grid>
                    <div className="tea-shelf-container">
                        <div className='tea-shelf' style={{backgroundImage: `url(${TeaShelf})`}}></div>
                    </div>
                </Box>
            </Box>
          </Box>
        }
      </Main>
    </Grommet>
  );
}

export default Pantry;