import React from 'react';

import { Box, Grommet, grommet, Grid} from 'grommet'

import { deepMerge } from 'grommet/utils';

import  AboutUsCard  from './AboutUsCard';

const data = [
   {

    heading: "Michele Lee Lynch",
    image: require("../../../src/assets/images/Michele.jpg").default,
    href1: "https://www.linkedin.com/in/michele-lee-lynch-a03877145/",
    href2: "https://github.com/MLLynch2K",
    paragraph1: " Currently working in the financial industry, but attending LPS Coding Bootcamp at University of Pennsylvania to transition into a career as a full stack web developer.",
   //paragraph2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere malesuada aliquet. Curabitur semper consequat suscipit. Suspendisse quis felis feugiat, egestas sapien quis, hendrerit orci. Cras augue diam, venenatis eu.",
    allyTitle: "Michele Lee Lynch"

   },
   {
    
    heading: "Gint Stirbys",
    image: require('../../../src/assets/images/Gint.JPG').default,
    href1: "https://www.linkedin.com/in/gintautas-stirbys/",
    href2: "https://github.com/Gintstir",
    paragraph1: " Currently working in the financial industry, but attending LPS Coding Bootcamp at University of Pennsylvania to transition into a career as a full stack web developer.",
    //paragraph2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere malesuada aliquet. Curabitur semper consequat suscipit. Suspendisse quis felis feugiat, egestas sapien quis, hendrerit orci. Cras augue diam, venenatis eu.",
    allyTitle: "Gint Stirbys"

   },
    {

    heading: "Joseph Cosgrove",
    image: require('../../../src/assets/images/Joseph.jpg').default,
    href1: "https://www.linkedin.com/in/gintautas-stirbys/",
    href2: "https://github.com/Gintstir",
    paragraph1: " Currently working in the financial industry, but attending LPS Coding Bootcamp at University of Pennsylvania to transition into a career as a full stack web developer.",
    //paragraph2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere malesuada aliquet. Curabitur semper consequat suscipit. Suspendisse quis felis feugiat, egestas sapien quis, hendrerit orci. Cras augue diam, venenatis eu.",
    allyTitle: "Joseph Cosgrove"


    },

    {
    
    heading: "David Daly",
    image: require('../../../src/assets/images/David.jpg').default,
    href1: "https://www.linkedin.com/in/david-daly-a627a2b5/",
    href2: "https://github.com/dalyd14",
    paragraph1: " I am a full stack web developer who has a degree in mechanical engineering. I am making a career transition to pursue my passion while also leveraging my engineering degree. I enjoy learning new skills and solving complex problems. ",
    //paragraph2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere malesuada aliquet. Curabitur semper consequat suscipit. Suspendisse quis felis feugiat, egestas sapien quis, hendrerit orci. Cras augue diam, venenatis eu.",
    a11yTitle: "David Daly"


    }


]

const customTheme = deepMerge(grommet, {
    global: {
        font: {
            family: `-apple-system,
               BlinkMacSystemFont, 
               "Segoe UI"`,
          },
    },
    card: {
        elevation: 'none',
        background: 'light-2',
        footer: {
            pad: 'medium',
        },
    },
    colors: {
        black: "#6F7269",
        green: "#749A5C",
        rooibos: "#FC6161",
        oolong: "#FFBC44",
        white: "#FBFBF7",
        herbal: "#A2065A",
        yellow: "#FFEB59",
    },
})



function AboutUs() {

    
    
    return (
        <Grommet theme={customTheme}>
            <Box pad="large" >
                <Grid gap="large" rows="large" columns={{count: 'fit', size: 'medium'}}>
                    {data.map((item) =>                     
                    (
                    <AboutUsCard item={item} key={item.heading}/>
                    ))}
                </Grid>
            </Box>
        </Grommet>
    )
}




export default AboutUs;