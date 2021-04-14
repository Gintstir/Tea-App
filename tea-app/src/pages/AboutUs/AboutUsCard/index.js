import React from 'react';

import { Box, Card, Button, CardBody, CardFooter, Collapsible, grommet, Heading, Grommet, Avatar, Paragraph} from 'grommet'
import { FormDown, FormUp, Github, Linkedin } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';


const customTheme = deepMerge(grommet, {
    global: {
        font: {
            family: `Abhaya Libre`,
            
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





function AboutUsCard({item}) {

    const [open, setOpen]= React.useState(false);
    const ExpandButton = ({ ...rest }) => {
        const Icon = open ? FormUp : FormDown;
        return (
          <Button
            hoverIndicator="light-4"
            icon={<Icon color="brand" />}
            {...rest}
          />
        );
    };
    
    return (
        <Grommet theme={customTheme}>                   
            <Card elevation="large" width="medium" key={item.heading} background={item.color}>
                <CardBody pad={{vertical: 'small'}}height="small">
                    <Avatar
                        // fit="contain"
                        alignSelf="center"
                        size="4xl"
                        src={item.image}
                        a11yTitle={item.a11yTitle}
                    />
                </CardBody>
                <Box  pad={{horizontal: "medium"}} responsive={true}>
                    <Heading alignSelf="center" level="3" margin={{ vertical: 'medium'}}>
                        {item.heading}
                    </Heading>
                    {/* <Paragraph margin={{ top: 'none'}}>
                        {item.paragraph1}
                    </Paragraph> */}
                </Box>
                <CardFooter>
                    <Box direction="row" align="center" gap="small">
                        <Button 
                            icon={<Linkedin color="black" />}                            
                            href={item.href1}

                        />
                        <Button
                            icon={<Github color="black" />}                            
                            href={item.href2}
                        />
                        
                    </Box>
                    <ExpandButton onClick={() => setOpen(!open)} />
                </CardFooter>
                <Collapsible open={open}>
                    <Paragraph margin="medium" color="black">
                        {item.paragraph1}
                    </Paragraph>
                </Collapsible>
            </Card>              
        </Grommet>
    )
}




export default AboutUsCard;