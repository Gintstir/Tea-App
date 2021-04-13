import React, { useState } from 'react'

import { Form, FormField, TextInput, Box, Button, Grommet, Text, grommet } from 'grommet'

import { deepMerge } from 'grommet/utils';

import { useMutation } from '@apollo/react-hooks'

import { ADD_EXTRA } from '../../utils/mutations'
import Auth from '../../utils/auth'

const customTheme = deepMerge(grommet, {
    global: {
        colors: {     
          // Setting new colors
          blue: "#00C8FF",
          green: "#749A5C",
          teal: "#82FFF2",
          purple: "#A2065A",
          red: "#FC6161",
          orange: "#FFBC44",
          yellow: "#FFEB59", 
          
          placeholder: "black"
        },
      input: {
        padding: {
          horizontal: "small",
          vertical: "medium"      
        },
        
      },    
    },    
});


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
            setValue({type: ''})
        } catch (e) {
            console.log(e)
        }
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
                { error && <Text>{error.message}</Text>}
            </Box>
        </Grommet>
    )
}

export default NewExtra