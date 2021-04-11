import React from "react";

// import { grommet } from "grommet/themes";
import { Grommet, Heading, Box, Grid, Button } from "grommet";
import { Add } from "grommet-icons";

import PantryShelfPic from '../../assets/images/PantryShelf.png'
import './pantry.css'

import PantryShelfCard from "../PantryShelfCard";

const PantryShelf = ({ shelfName, setShow, pantryData }) => {

    const specificData = pantryData[`${shelfName.toLowercase()}s`]

    const isVowel = (letter) => {
        letter = letter.toLowercase()
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' ) {
            return true
        } else {
            return false
        }
    }

    return (
        <Grommet>
            <Box>
                <Box direction="row" pad="xsmall">
                    <Heading level={3}>{shelfName}s</Heading>
                    <Button margin="small" secondary onClick={() => setShow({content: `New${shelfName}`, show: true})}><Add size="small" /> Add {shelfName}</Button>
                </Box>
                <Box overflow={{horizontal: "auto"}}>
                    <Grid margin={{right: "auto"}} pad={{right: "15px", left: "15px"}} gap="small" justify="start" columns={{ count: specificData.length, size: "xsmall" }} style={{zIndex: 5}}>
                    {
                        specificData.length ?
                        specificData.map(data => (
                            <PantryShelfCard cardData={data} />
                        )) :
                        `Add a${ isVowel(shelfName[0]) ? 'n' : ''} ${shelfName}`
                    }
                    </Grid>
                    <div className="pantry-shelf-container">
                        <div className='pantry-shelf' style={{backgroundImage: `url(${PantryShelfPic})`}}></div>
                    </div>
                </Box>
            </Box>
        </Grommet>
    );
}

export default PantryShelf;