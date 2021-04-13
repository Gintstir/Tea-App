import React from 'react';
import {Grommet, Card, Text, Paragraph, grommet} from "grommet";

import {deepMerge} from 'grommet/utils';

const customTheme = deepMerge(grommet, {
    global: {
        font: {
            family: `Abhaya Libre`,
          },
    },
})

const FAQ = () => {
    return ( 
        <Grommet theme={customTheme}>
            <Card>
                <Paragraph>
                    <Text>
                        Sup?
                    </Text>
                </Paragraph>
            </Card>
        </Grommet>
    )
}

export default FAQ;