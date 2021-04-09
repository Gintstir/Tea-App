import React, { useState } from 'react'

import { Form, FormField, TextInput, Box, Button, Grommet, Text } from 'grommet'
import { useMutation } from '@apollo/client'

import { ADD_EXTRA } from '../../utils/mutations'

const NewExtra = () => {
    
    const [value, setValue] = useState({
        type: ''
    })

    const [addExtra, { error }] = useMutation(ADD_EXTRA)

    const handleSubmit = async values => {
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