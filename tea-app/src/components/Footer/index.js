import React from 'react';

import { Link } from "react-router-dom";

import {   
  Group,
//   Linkedin,
  Github,
} from 'grommet-icons';
import { deepMerge } from 'grommet/utils';

import { Anchor, Box, Footer, Grommet, grommet, Text} from 'grommet';

const customTheme = deepMerge(grommet, {
    global: {
      colors: {      
        // Setting new colors
        blue: "#00C8FF",
        black: "#6F7269",
        green: "#749A5C",
        roobois: "#FC6161",
        purple: "#A2065A",
        white: "#FBFBF7",
        red: "#EE6373",
        orange: "#FFBC44",
        yellow: "#FFEB59",     
        
        }
      
    },
});

function Foot () {
  
    return (
        <Grommet theme={customTheme}>
            <Footer background="light-6" style={{position: "fixed", left: "0", right: "0", bottom:"0"}}>
                <Box align="center" direction="row" gap="xsmall" margin={{left:"10px"}}>
                    
                    <Text alignSelf="center" color="black" size="small">
                    Thanks for visiting!
                    </Text>
                </Box>
                <Box direction="row" gap="small" justify="center" style={{margin: "0 auto"}}>
                    <Anchor
                    a11yTitle="Share feedback on Github"
                    href="https://github.com/Gintstir/Tea-App"
                    icon={<Github color="black" size="large"/>}
                    />
                    <Link to="/about">
                        <Box pad="12px">
                            <Group color="black" size="large" a11yTitle="About us"/>
                        </Box>
                    </Link>
                    {/* <Anchor
                    a11yTitle="Give us a Job!"
                    href="https://twitter.com/"
                    icon={<Linkedin color="brand" />}
                    /> */}
                </Box>
                <Box align="center" direction="row" gap="xsmall" margin={{right:"10px"}}>
                    
                    <Text alignSelf="center" color="black" size="small">
                    ©Copyright, 2021
                    </Text>
                </Box>
            </Footer>
        </Grommet>
    )
};

export default Foot;

