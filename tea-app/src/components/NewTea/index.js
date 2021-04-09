import React, { useState } from 'react'

import { Form, FormField, TextInput, Box, Button, Grommet, Text } from 'grommet'
import { useMutation } from '@apollo/client'

import { ADD_TEA } from '../../utils/mutations'

const NewTea = () => {
    
    const [value, setValue] = useState({
        type: '',
        name: '',
        brand: ''
    })

    const [addTea, { error }] = useMutation(ADD_TEA)

    const handleSubmit = async values => {
        try {
            await addTea({
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
                    type: '',
                    name: '',
                    brand: ''
                })}
                onSubmit={ async ({value}) => handleSubmit(value) }
            >
                <FormField name="type" htmlFor="tea-type-id" label="Type">
                    <TextInput id="tea-type-id" name="type" />
                </FormField>
                <FormField name="name" htmlFor="tea-name-id" label="Name">
                    <TextInput id="tea-name-id" name="name" />
                </FormField>
                <FormField name="brand" htmlFor="tea-brand-id" label="Brand">
                    <TextInput id="tea-brand-id" name="brand" />
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

export default NewTea