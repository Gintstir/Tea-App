import React from "react";
import moment from 'moment'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

import { Grommet, Box, Image, Card, CardBody, CardFooter, Heading, Text, Grid, List, Button } from "grommet";

import PantryShelfTeaCard from '../PantryShelfTeaCard'
import { AddCircle, Spa, Clock, Note } from "grommet-icons";

export const RecipeCard = ({ recipe }) => {

    const createdDate = moment.unix(recipe.createdAt/1000).format('l')

    const convertToTimer = (timeSeconds) => {
        if(!timeSeconds) {
            return ''
        }
        timeSeconds = parseInt(timeSeconds)
        if(timeSeconds < 60) {
            return `${timeSeconds} sec`
        } else {
            return `${Math.floor(timeSeconds/60)} min ${timeSeconds%60} sec`
        }
    }

    console.log(recipe)
    const gridAreas = [
        { name: 'teaLabel', start: [0,0], end: [0,0]},
        { name: 'teaValue', start: [1,0], end: [1,0]},
        { name: 'extrasLabel', start: [0,1], end: [0,1]},
        { name: 'extrasValue', start: [1,1], end: [1,1]},
        { name: 'temperatureLabel', start: [0,2], end: [0,2]},
        { name: 'temperatureValue', start: [1,2], end: [1,2]},
        { name: 'steepTimeLabel', start: [0,3], end: [0,3]},
        { name: 'steepTimeValue', start: [1,3], end: [1,3]},
        { name: 'notesLabel', start: [0,4], end: [0,4]},
        { name: 'notesValue', start: [1,4], end: [1,4]}
    ]
    return (
        <Grommet>
            <Flippy style={{
                marginTop: "25px",
                marginBottom: "25px",
            }}>
                <FrontSide style={{ padding: "0" }}>
                    <Card fill={true} elevation="medium" background="white">
                        <CardBody width="medium">
                            <Image fit="cover" src={`http://localhost:3001/images/${recipe.picture}`} />
                        </CardBody>
                        <CardFooter direction="row" justify="between" fill="horizontal">
                            <Heading level="5" margin={{left: "small"}}>{recipe.tea.name}</Heading>
                            <Heading level="5" margin={{right: "small"}}>{createdDate}</Heading>      
                        </CardFooter>
                    </Card>  
                </FrontSide>
                <BackSide style={{padding: "0"}}>
                    <Card fill={true} elevation="medium" background="white">
                        <CardBody pad="medium" width="medium" direction="column" align="center" overflow={{vertical: "auto"}}>
                            <Grid margin={{bottom: 'medium'}} columns={['auto', 'auto']} rows={['auto', 'auto','auto', 'auto', 'auto']} areas={gridAreas} gap="small">
                                <Box gridArea="teaLabel" direction="row" margin={{right: "medium"}} align="center">
                                    <Spa />
                                    <Heading level="3" margin="small">Tea</Heading>
                                </Box>
                                <Box gridArea='teaValue' direction="row" justify="center">
                                    <PantryShelfTeaCard height="75px" cardData={recipe.tea} />
                                </Box>
                                <Box gridArea="extrasLabel" direction="row" margin={{right: "medium"}} align="center">
                                    <AddCircle />
                                    <Heading level="3" margin="small">Extras</Heading>
                                </Box>
                                <Box gridArea='extrasValue'>
                                    <List data={recipe.extra} />
                                </Box>
                                <Box gridArea="temperatureLabel" direction="row" margin={{right: "medium"}} align="center">
                                    <i className="material-icons">thermostat</i>
                                    <Heading level="3" margin="small">Temperature</Heading>
                                </Box>
                                <Box gridArea='temperatureValue' direction="row" align="center" justify="center">
                                    <Text>{recipe.temperature}</Text>
                                </Box>
                                <Box gridArea="steepTimeLabel" direction="row" margin={{right: "medium"}} align="center">
                                    <Clock />
                                    <Heading level="3" margin="small">Steep Time</Heading>
                                </Box>
                                <Box gridArea='steepTimeValue' direction="row" align="center" justify="center">
                                    <Text>{convertToTimer(recipe.steepTime)}</Text>
                                </Box>
                                <Box gridArea="notesLabel" direction="row" margin={{right: "medium"}} align="center">
                                    <Note />
                                    <Heading level="3" margin="small">Notes</Heading>
                                </Box>
                                <Box gridArea='notesValue' direction="row" align="center" justify="center">
                                    <Text>{recipe.note}</Text>
                                </Box>
                            </Grid>
                            <Button>Delete Recipe</Button>                      
                        </CardBody>
                    </Card>   
                </BackSide>
            </Flippy>

        </Grommet>
    );
};

export default RecipeCard;
