import React, { useState } from 'react'

import { Form, FormField, TextInput, Box, Button, Grommet, Text } from 'grommet'
import { useMutation } from '@apollo/react-hooks'

import { ADD_EXTRA } from '../../utils/mutations'
import Auth from '../../utils/auth'

const NewExtra = () => {
    
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
        } catch (e) {
            console.log(e)
        }
    }
    
    return (
        <Grommet>
            <Form
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onReset={() => setValue({
                    type: ''
                })}
                onSubmit={ async ({value}) => handleSubmit(value) }
            >
                <FormField name="type" htmlFor="tea-type-id" label="Type">
                    <TextInput id="tea-type-id" name="type" />
                </FormField>
                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Submit" />
                    <Button type="reset" label="Reset" />
                </Box>
            </Form>
            { error && <Text>{error.message}</Text>}            
        </Grommet>
    )
}

export default NewExtra