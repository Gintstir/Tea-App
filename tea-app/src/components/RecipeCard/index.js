import React from "react";
import moment from 'moment'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

import { Grommet, Box, Image, Card, CardBody, CardFooter, Heading, Text, Grid, List, Button } from "grommet";

import PantryShelfTeaCard from '../PantryShelfTeaCard'
import { AddCircle, Spa, Clock, Note, SubtractCircle } from "grommet-icons";

import { useMutation } from "@apollo/client";
import { REMOVE_RECIPE } from "../../utils/mutations";
import { QUERY_ME } from '../../utils/queries'

import Auth from '../../utils/auth'

export const RecipeCard = ({ recipe, setAddNotification }) => {

    const [deleteRecipe] = useMutation(REMOVE_RECIPE, {
        update(cache, { data: {removeRecipe }}) {
            const { me } = cache.readQuery({ query: QUERY_ME })
            me.recipes = me.recipes.filter(recipe => recipe._id !== removeRecipe._id)
            cache.writeQuery({
                query: QUERY_ME,
                data: { me }
            })
        }
    })

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


    const handleDelete = async () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null

        if (!token) {
            Auth.logout()
            return false
        }
        
        try {
          await deleteRecipe({
            variables: { id: recipe._id }
          })
          setAddNotification({show: true, type:'warning', message: "Recipe removed"})
          setTimeout(() => {
            setAddNotification({show: false, type: '', message: ''})
          }, 3000)
        } catch (e) {
          setAddNotification({show: true, type:'error', message: `Error: ${e.message.replace('GraphQL error: ', '')}`})
          setTimeout(() => {
            setAddNotification({show: false, type: '', message: ''})
          }, 3000)
          console.error(e)
        }
    }

    return (
        <Grommet>
            <Flippy style={{
                marginTop: "25px",
                marginBottom: "25px",
                cursor: "pointer"
            }}>
                <FrontSide style={{ padding: "0" }}>
                    <Card fill={true} elevation="medium" background="white">
                        <CardBody>
                            <Image style={{maxWidth: "600px", width: "80vw"}} fit="cover" src={`/images/${recipe.picture}`} />
                        </CardBody>
                        <CardFooter direction="row" justify="between" fill="horizontal">
                            <Heading level="5" margin={{left: "small"}}>{recipe.tea.name}</Heading>
                            <Heading level="5" margin={{right: "small"}}>{createdDate}</Heading>      
                        </CardFooter>
                    </Card>  
                </FrontSide>
                <BackSide style={{padding: "0"}}>
                    <Card fill={true} elevation="medium" background="white">
                        <CardBody pad="medium" direction="column" align="center" overflow={{vertical: "auto"}}>
                            <Grid fill="horizontal" margin={{bottom: 'medium'}} columns={['auto', 'auto']} rows={['auto', 'auto','auto', 'auto', 'auto']} areas={gridAreas} gap="small">
                                <Box gridArea="teaLabel" direction="row" margin={{right: "medium"}} align="center">
                                    <Spa />
                                    <Heading level="4" margin="small">Tea</Heading>
                                </Box>
                                <Box gridArea='teaValue' direction="row" justify="center">
                                    <PantryShelfTeaCard height="75px" cardData={recipe.tea} />
                                </Box>
                                <Box gridArea="extrasLabel" direction="row" margin={{right: "medium"}} align="center">
                                    <AddCircle />
                                    <Heading level="4" margin="small">Extras</Heading>
                                </Box>
                                <Box gridArea='extrasValue'>
                                    <List data={recipe.extra} />
                                </Box>
                                <Box gridArea="temperatureLabel" direction="row" margin={{right: "medium"}} align="center">
                                    <i className="material-icons">thermostat</i>
                                    <Heading level="4" margin="small">Temperature</Heading>
                                </Box>
                                <Box gridArea='temperatureValue' direction="row" align="center" justify="center">
                                    <Text>{recipe.temperature}</Text>
                                </Box>
                                <Box gridArea="steepTimeLabel" direction="row" margin={{right: "medium"}} align="center">
                                    <Clock />
                                    <Heading level="4" margin="small">Steep Time</Heading>
                                </Box>
                                <Box gridArea='steepTimeValue' direction="row" align="center" justify="center">
                                    <Text>{convertToTimer(recipe.steepTime)}</Text>
                                </Box>
                                <Box gridArea="notesLabel" direction="row" margin={{right: "medium"}} align="center">
                                    <Note />
                                    <Heading level="4" margin="small">Notes</Heading>
                                </Box>
                                <Box gridArea='notesValue' direction="row" align="center" justify="center">
                                    <Text>{recipe.note}</Text>
                                </Box>
                            </Grid>
                            <Button onClick={handleDelete} primary={true} color="status-error" label="Delete Recipe" icon={<SubtractCircle />} />                      
                        </CardBody>
                    </Card>   
                </BackSide>
            </Flippy>
        </Grommet>
    );
};

export default RecipeCard;
