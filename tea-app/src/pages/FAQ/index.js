import React from 'react';
import {Grommet, Main, Box, Text, Paragraph, grommet} from "grommet";

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
           <Main pad={{horizontal: "80px", top:" 100px", bottom: "100px"}}>
                <Box background="orange" align="center">
                    <Paragraph >
                        <Text>
                            Q: What is tea?
                            A: In the world of hot, steeped beverages you will run into two major categories, herbal infusions and teas. True teas contain leaves of the camellia sinensis plant that are grown, harvested, and processed in distinct ways that yield white, green, black, and yellow (oolong) tea. 
                            Q: What’s the scoop with caffeine?
                            A: All true teas contain caffeine, even if they are decaffeinated. Many popular herbal infusions are completely caffeine free with the exception of a few heavy hitters like yaupon holly, and yerba-maté. Caffeine content present in tea is just as dependent on how hot your water is and how long you steep as the color of the tea, and multiple brewings release more caffeine, not less!
                            Q: Health benefits and tea?
                            A: We’re not doctors, but tea has been around for thousands of years so it must be doing something right! If you have sensitivities to caffeine be gentle with your introduction to tea or stick to herbals. Always read labels to check for ingredients you might be allergic to, and reach out to companies that use “natural flavors” in their teas in the event that something hidden in there is triggering an allergic response. 
                            Q: What’s up with powdered tea? 
                            A: Powdered tea is tea leaves (and sometimes sugar and citric acid) that are dessicated and blitzed to a fine powder that dissolves in water. If they are made with the whole tea leaf they will have more readily available caffeine so you might notice more of a buzz from drinking them. Matcha teas are a particular preparation of a specially grown green tea from Japan that has many modern counterparts available in the form of matcha latte powders and snacks. 
                            Q: Should I squeeze my tea bag?
                            A:  That depends! You will extract every last bit of flavor from the bag if you’re squeezing. This can be useful for herbal teas that you are drinking for health benefits, but might result in a brew that is a little more bitter than it should be if you’re drinking green or black tea. 
                            Q: Are tea bags OK?
                            A: You bet! Tea bags have marginally more of an environmental impact, but they make tea drinking a convenient pleasure for those of us on the go. Loose leaf teas have the benefit of being presented in their whole form so you can play around with portion control and generally get more nuanced brews. 
                            Q: How do you brew your tea?
                            A: Any method that tastes good is how you should brew. We suggest sticking to package instructions on your first brew and giving the tea at least two sips before deciding if you’re going to add sugar, lemon, or diluting liquid like milk. For loose leaf teas, a dedicated French Press is an affordable, easy to clean, durable solution to consistently brewing high quality tea.
                            Q: Does water quality matter?
                            A: It certainly does! While your water doesn’t need to be fresh-from-the-cloud perfection, it does help to use at least lightly filtered water. The cleaner the water, the less deposits you will have in your tea kettle and the more honest the flavor of your brews will be. 
                        </Text>
                    </Paragraph>
                </Box>            
           </Main>
        </Grommet>
    )
}

export default FAQ;