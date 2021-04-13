import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

import { Form, FormField, TextInput, Box, Button, Grommet } from 'grommet'

import Auth from '../../utils/auth'

import { ADD_EXTRA } from '../../utils/mutations'

const NewExtra = ({ setAddNotification }) => {
    
    const [value, setValue] = useState({
        type: ''
    })

    const [addExtra, { error }] = useMutation(ADD_EXTRA)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const token = Auth.loggedIn() ? Auth.getToken() : null

        if (!token) {
            return false
        }

        try {
            await addExtra({
                variables: event.value
            })
            setValue({type: ''})
            setAddNotification({show: true, type: 'success', message: "Extra added successfully!"})
            setTimeout(() => {
                setAddNotification({show: false, type: '', message: ''})
            }, 3000)
        } catch (e) {
            setAddNotification({show: true, type:'error', message: `Error: ${e.message.replace('GraphQL error: ', '')}`})
            setTimeout(() => {
              setAddNotification({show: false, type: '', message: ''})
            }, 3000)
            console.error(e)
        }
    }

    if (error) {
        setAddNotification({show: true, type:'error', message: `An error occurred! ${error.message}`})
    }
    
    return (
        <Grommet>
            <Box justify="center">
                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onReset={() => setValue({
                        type: ''
                    })}
                    onSubmit={ (event) => handleSubmit(event) }
                >
                    <FormField contentProps={{border: false}} pad={true} required={true} name="type" htmlFor="tea-type-id" label="Type">
                        <TextInput id="tea-type-id" name="type" />
                    </FormField>
                    <Box direction="row" gap="medium" justify="center">
                        <Button type="submit" primary label="Submit" />
                        <Button type="reset" label="Reset" />
                    </Box>
                </Form>
            </Box>
        </Grommet>
    )
}

export default NewExtra