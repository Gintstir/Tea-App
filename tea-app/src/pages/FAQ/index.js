import React from 'react';
import {Grommet, Main, Box, Text, grommet} from "grommet";

import {deepMerge} from 'grommet/utils';

const customTheme = deepMerge(grommet, {
    global: {
        font: {
            family: `Abhaya Libre`,
        },
        colors: {
            // Setting new colors
            blue: "#00C8FF",
            black: "6F7269",
            green: "#749A5C",
            roobois: "#FC6161",
            purple: "#A2065A",
            white: "#FBFBF7",
            red: "#EE6373",
            orange: "#FFBC44",
            yellow: "#FFEB59",
        },        
    },
});

const FAQ = () => {
    return ( 
        <Grommet theme={customTheme}>
           <Main responsive={true} pad={{horizontal: "30px", top:" 50px", bottom: "50px"}}>
                <Box responsive={true} background="light-6" align="center" >
                    <Box responsive={true}>
                        <Text size="xlarge" margin={{top: "20px"}}alignSelf="center">Tea FAQs</Text>
                        <Text margin="medium">
                            <Text color="purple">Q:</Text><Text size="large"> What is tea?</Text><br></br>
                            <Text color="darkgreen">A:</Text> In the world of hot, steeped beverages you will run into two major categories, herbal infusions and teas. True teas contain leaves of the camellia sinensis plant that are grown, harvested, and processed in distinct ways that yield white, green, black, and yellow (oolong) tea. <br></br><br></br>
                            <Text color="purple">Q:</Text><Text size="large"> What’s the scoop with caffeine?</Text><br></br>
                            <Text color="darkgreen">A:</Text> All true teas contain caffeine, even if they are decaffeinated. Many popular herbal infusions are completely caffeine free with the exception of a few heavy hitters like yaupon holly, and yerba-maté. Caffeine content present in tea is just as dependent on how hot your water is and how long you steep as the color of the tea, and multiple brewings release more caffeine, not less!<br></br><br></br>
                            <Text color="purple">Q:</Text><Text size="large"> Health benefits and tea?</Text><br></br>
                            <Text color="darkgreen">A:</Text> We’re not doctors, but tea has been around for thousands of years so it must be doing something right! If you have sensitivities to caffeine be gentle with your introduction to tea or stick to herbals. Always read labels to check for ingredients you might be allergic to, and reach out to companies that use “natural flavors” in their teas in the event that something hidden in there is triggering an allergic response. <br></br><br></br>
                            <Text color="purple">Q:</Text><Text size="large"> What’s up with powdered tea?</Text> <br></br>
                            <Text color="darkgreen">A:</Text> Powdered tea is tea leaves (and sometimes sugar and citric acid) that are dessicated and blitzed to a fine powder that dissolves in water. If they are made with the whole tea leaf they will have more readily available caffeine so you might notice more of a buzz from drinking them. Matcha teas are a particular preparation of a specially grown green tea from Japan that has many modern counterparts available in the form of matcha latte powders and snacks. <br></br><br></br>
                            <Text color="purple">Q:</Text> <Text size="large">Should I squeeze my tea bag?</Text><br></br>
                            <Text color="darkgreen">A:</Text>  That depends! You will extract every last bit of flavor from the bag if you’re squeezing. This can be useful for herbal teas that you are drinking for health benefits, but might result in a brew that is a little more bitter than it should be if you’re drinking green or black tea. <br></br><br></br>
                            <Text color="purple">Q:</Text> <Text size="large">Are tea bags OK?</Text><br></br>
                            <Text color="darkgreen">A:</Text> You bet! Tea bags have marginally more of an environmental impact, but they make tea drinking a convenient pleasure for those of us on the go. Loose leaf teas have the benefit of being presented in their whole form so you can play around with portion control and generally get more nuanced brews. <br></br><br></br>
                            <Text color="purple">Q:</Text> <Text size="large">How do you brew your tea?</Text><br></br>
                            <Text color="darkgreen">A:</Text> Any method that tastes good is how you should brew. We suggest sticking to package instructions on your first brew and giving the tea at least two sips before deciding if you’re going to add sugar, lemon, or diluting liquid like milk. For loose leaf teas, a dedicated French Press is an affordable, easy to clean, durable solution to consistently brewing high quality tea.<br></br><br></br>
                            <Text color="purple">Q:</Text> <Text size="large">Does water quality matter?</Text><br></br>
                            <Text color="darkgreen">A:</Text> It certainly does! While your water doesn’t need to be fresh-from-the-cloud perfection, it does help to use at least lightly filtered water. The cleaner the water, the less deposits you will have in your tea kettle and the more honest the flavor of your brews will be. <br></br><br></br>
                        </Text>
                    </Box>
                </Box>            
           </Main>
        </Grommet>
    )
}

export default FAQ;