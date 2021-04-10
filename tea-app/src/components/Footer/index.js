import React from 'react';

import { 
  FacebookOption,
  Instagram,
  Twitter,
} from 'grommet-icons';
import { deepMerge } from 'grommet/utils';

import { Anchor, Box, Footer, Grommet, grommet} from 'grommet';

const customTheme = deepMerge(grommet, {
    global: {
      colors: {      
        // Setting new colors
        blue: "#00C8FF",
        green: "#749A5C",
        teal: "#82FFF2",
        purple: "#A2065A",
        red: "#FC6161",
        orange: "#FFBC44",
        yellow: "#FFEB59",     
        
        }
      
    },
});

function Foot () {
  
    return (
        <Grommet theme={customTheme}>
            <Footer background="red">
                <Box direction="row" gap="xxsmall" justify="center">
                    <Anchor
                        a11yTitle="Share feedback on Github"
                        href="https://www.instagram.com/"
                        icon={<Instagram color="brand" />}
                    />
                    <Anchor
                        a11yTitle="Chat with us on Slack"
                        href="https://www.facebook.com/"
                        icon={<FacebookOption color="brand" />}
                    />
                    <Anchor
                        a11yTitle="Follow us on Twitter"
                        href="https://twitter.com/"
                        icon={<Twitter color="brand" />}
                    />
                </Box>
            </Footer>
        </Grommet>
    )
};

export default Foot;

