import React from "react";

import { Grommet, Text, Box, Button, Layer, grommet } from "grommet";

import {deepMerge} from 'grommet/utils';

import { StatusGood, FormClose, CircleAlert } from "grommet-icons";

const customTheme = deepMerge(grommet, {
    global: {
        font: {
          family: `Abhaya Libre`,
        },
    },
})

const Notification = ({setAddNotification, addNotification}) => {

    let backgroundColor
    switch (addNotification.type) {
        case 'success':
            backgroundColor = 'status-ok'
            break;
        case 'error':
            backgroundColor = 'status-error'
            break;
        case 'warning':
            backgroundColor = 'status-warning'
            break
        default:
            backgroundColor = 'status-unknown'
            break;
    }

    return (
        <Grommet theme={customTheme}>
            <Layer
            position="bottom"
            modal={false}
            margin={{ vertical: 'medium', horizontal: 'medium' }}
            onEsc={ () => setAddNotification({show: false, type: '', message: ''}) }
            responsive={false}
            full="horizontal"
            plain
            >
                <Box
                    align="center"
                    direction="row"
                    gap="small"
                    justify="between"
                    round="medium"
                    elevation="medium"
                    pad={{ vertical: 'xsmall', horizontal: 'small' }}
                    background={backgroundColor}
                >             
                    {
                        addNotification.type === 'success' ?
                        <StatusGood /> :
                        <CircleAlert />
                    }
                    <Box align="center" direction="row" gap="xsmall">
                        <Text textAlign="center">
                            {addNotification.message}
                        </Text>
                    </Box>
                    <Button icon={<FormClose />} onClick={ () => setAddNotification({show: false, message: ''}) } plain />
                </Box>
            </Layer>
        </Grommet>
    );
}

export default Notification;