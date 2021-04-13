import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import { Form, FormField, TextInput, Box, Button, Grommet, grommet } from 'grommet'

import { deepMerge } from 'grommet/utils';

import Auth from '../../utils/auth'

import { ADD_EXTRA } from '../../utils/mutations'

const customTheme = deepMerge(grommet, {
    global: {
        colors: {
            purple: "#A2065A",
        }
    }
})

const NewExtra = ({ setAddNotification }) => {
    
    const [value, setValue] = useState({
        type: ''
    })

    const [addExtra, { error }] = useMutation(ADD_EXTRA)

    const handleSubmit = async values => {
        const token = Auth.loggedIn() ? Auth.getToken() : null

        if (!token) {
            return false
        }

        try {
            await addExtra({
                variables: values
            })
            setValue({type: ''})
            setAddNotification({show: true, type: 'success', message: "Extra added successfully!"})
            setTimeout(() => {
                setAddNotification({show: false, type: '', message: ''})
            }, 3000)
        } catch (e) {
            console.log(e)
        }
    }

    if (error) {
        setAddNotification({show: true, type:'error', message: `An error occurred! ${error.message}`})
    }
    
    return (
        <Grommet theme={customTheme}>
            <Box justify="center">
                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onReset={() => setValue({
                        type: ''
                    })}
                    onSubmit={ async ({value}) => handleSubmit(value) }
                >
                    <FormField contentProps={{border: false}} pad={true} required={true} name="type" htmlFor="tea-type-id" label="Type">
                        <TextInput style={{fontFamily: "Ahbaya Libre"}} id="tea-type-id" name="type" />
                    </FormField>
                    <Box direction="row" gap="medium" justify="center">
                        <Button style={{fontFamily: "Ahbaya Libre"}} color="purple" type="submit" primary label="Submit" />
                        <Button style={{fontFamily: "Ahbaya Libre"}} color="purple" type="reset" label="Reset" />
                    </Box>
                </Form>
            </Box>
        </Grommet>
    )
}

export default NewExtra