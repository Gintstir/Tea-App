import React from 'react';

import { Box, Card, Button, CardBody, CardFooter, Collapsible, Heading, Grommet, Image, Paragraph, grommet, Grid} from 'grommet'
import { FormDown, FormUp, Github, Linkedin } from 'grommet-icons';
import { deepMerge } from 'grommet/utils';

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
            <Box pad="large" >
                <Grid gap="medium" rows="medium" columns={{count: 'fit', size: 'medium'}}>
                    <Card elevation="large" width="medium">
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src="tea-app\src\assets\images\pexels-taryn-elliott-3889850.jpg"
                                allyTitle="Michele Lee Lynch"
                            />
                        </CardBody>
                        <Box pad={{horizontal: "medium"}} responsive={false}>
                            <Heading level="3" margin={{ vertical: 'medium'}}>
                                Michele Lee Lynch
                            </Heading>
                            <Paragraph margin={{ top: 'none'}}>
                                Currently working in the financial industry, but attending LPS Coding Bootcamp at University of Pennsylvania to transition into a career as a full stack web developer. 
                            </Paragraph>
                        </Box>
                        <CardFooter>
                            <Box direction="row" align="center" gap="small">
                                <Button 
                                    icon={<Linkedin color="black" />}
                                    hoverIndicator
                                />
                                <Button
                                    icon={<Github color="black" />}
                                    hoverIndicator
                                />
                                
                            </Box>
                            <ExpandButton onClick={() => setOpen(!open)} />
                        </CardFooter>
                       <Collapsible open={open}>
                           <Paragraph margin="medium" color="purple">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere malesuada aliquet. Curabitur semper consequat suscipit. Suspendisse quis felis feugiat, egestas sapien quis, hendrerit orci. Cras augue diam, venenatis eu.
                           </Paragraph>
                       </Collapsible>
                    </Card>
                    <Card elevation="large" width="medium">
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src="tea-app/src/pages/AboutUs/pexels-koko-rahmadie-227908.jpg"
                                allyTitle="Michele Lee Lynch"
                            />
                        </CardBody>
                        <Box pad={{horizontal: "medium"}} responsive={false}>
                            <Heading level="3" margin={{ vertical: 'medium'}}>
                                Michele Lee Lynch
                            </Heading>
                            <Paragraph margin={{ top: 'none'}}>
                                Currently working in the financial industry, but attending LPS Coding Bootcamp at University of Pennsylvania to transition into a career as a full stack web developer. 
                            </Paragraph>
                        </Box>
                        <CardFooter>
                            <Box direction="row" align="center" gap="small">
                                <Button 
                                    icon={<Linkedin color="black" />}
                                    hoverIndicator
                                />
                                <Button
                                    icon={<Github color="black" />}
                                    hoverIndicator
                                />
                                
                            </Box>
                            <ExpandButton onClick={() => setOpen(!open)} />
                        </CardFooter>
                       <Collapsible open={open}>
                           <Paragraph margin="medium" color="purple">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere malesuada aliquet. Curabitur semper consequat suscipit. Suspendisse quis felis feugiat, egestas sapien quis, hendrerit orci. Cras augue diam, venenatis eu.
                           </Paragraph>
                       </Collapsible>
                    </Card>
                    <Card elevation="large" width="medium">
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src="tea-app/src/pages/AboutUs/pexels-koko-rahmadie-227908.jpg"
                                allyTitle="Michele Lee Lynch"
                            />
                        </CardBody>
                        <Box pad={{horizontal: "medium"}} responsive={false}>
                            <Heading level="3" margin={{ vertical: 'medium'}}>
                                Michele Lee Lynch
                            </Heading>
                            <Paragraph margin={{ top: 'none'}}>
                                Currently working in the financial industry, but attending LPS Coding Bootcamp at University of Pennsylvania to transition into a career as a full stack web developer. 
                            </Paragraph>
                        </Box>
                        <CardFooter>
                            <Box direction="row" align="center" gap="small">
                                <Button 
                                    icon={<Linkedin color="black" />}
                                    hoverIndicator
                                />
                                <Button
                                    icon={<Github color="black" />}
                                    hoverIndicator
                                />
                                
                            </Box>
                            <ExpandButton onClick={() => setOpen(!open)} />
                        </CardFooter>
                       <Collapsible open={open}>
                           <Paragraph margin="medium" color="purple">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere malesuada aliquet. Curabitur semper consequat suscipit. Suspendisse quis felis feugiat, egestas sapien quis, hendrerit orci. Cras augue diam, venenatis eu.
                           </Paragraph>
                       </Collapsible>
                    </Card>
                    <Card elevation="large" width="medium">
                        <CardBody height="small">
                            <Image
                                fit="cover"
                                src="tea-app/src/pages/AboutUs/pexels-koko-rahmadie-227908.jpg"
                                allyTitle="Michele Lee Lynch"
                            />
                        </CardBody>
                        <Box pad={{horizontal: "medium"}} responsive={false}>
                            <Heading level="3" margin={{ vertical: 'medium'}}>
                                Michele Lee Lynch
                            </Heading>
                            <Paragraph margin={{ top: 'none'}}>
                                Currently working in the financial industry, but attending LPS Coding Bootcamp at University of Pennsylvania to transition into a career as a full stack web developer. 
                            </Paragraph>
                        </Box>
                        <CardFooter>
                            <Box direction="row" align="center" gap="small">
                                <Button 
                                    icon={<Linkedin color="black" />}
                                    hoverIndicator
                                />
                                <Button
                                    icon={<Github color="black" />}
                                    hoverIndicator
                                />
                                
                            </Box>
                            <ExpandButton onClick={() => setOpen(!open)} />
                        </CardFooter>
                       <Collapsible open={open}>
                           <Paragraph margin="medium" color="purple">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere malesuada aliquet. Curabitur semper consequat suscipit. Suspendisse quis felis feugiat, egestas sapien quis, hendrerit orci. Cras augue diam, venenatis eu.
                           </Paragraph>
                       </Collapsible>
                    </Card>
                </Grid>

            </Box>
        </Grommet>
    )
}

export default AboutUs;