import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
// import { grommet } from "grommet/themes";
import { Grommet, Box, Form, FormField, TextInput, grommet, Button } from "grommet";
import { deepMerge } from 'grommet/utils';

const customTheme = deepMerge(grommet, {
    formField: {
      border: {
        error: {
          color: 'border',
        },
        color: 'border',
        side: 'all',
      },
      disabled: {
        background: {
          color: undefined,
        },
        border: {
          color: 'status-disabled',
        },
        label: {
          color: 'status-disabled',
        },
      },
      error: {
        background: {
          color: { light: '#FF404033', dark: '#FF40404D' },
        },
        size: 'xsmall',
        color: 'text-weak',
        margin: {
          start: 'none',
        },
      },
      help: {
        size: 'xsmall',
        color: 'text-weak',
        margin: {
          start: 'none',
          bottom: 'xsmall',
        },
      },
      info: {
        size: 'xsmall',
        color: 'text-weak',
        margin: {
          start: 'none',
        },
      },
      label: {
        size: 'xsmall',
        color: 'text-weak',
        margin: {
          horizontal: 'none',
        },
      },
      round: '4px',
    },
  });

function Signup(props) {
    const [ formState, setFormState ] = useState({ email: '', password: '' });
    const [ addUser ] = useMutation(ADD_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email, password: formState.password, username: formState.username
            }
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <Grommet theme={customTheme}>
            <Box align="center" pad="large">
                <h1>Sign Up!</h1>
                <Form>
                    <Box border gap="medium" pad="large" width="medium">
                        <FormField 
                          htmlFor="enabled-id"
                          name="enabled"
                          label="Username"
                          onSubmit={handleFormSubmit}>
                            <TextInput 
                              id="enabled-id"
                              name="enabled"
                              placeholder="Username"
                              onChange={handleChange} />
                        </FormField>
                        <FormField htmlFor="enabled-id" name="enabled" label="Email">
                            <TextInput id="enabled-id" name="enabled" placeholder="Email" />
                        </FormField>
                        <FormField htmlFor="enabled-id" name="enabled" label="Password">
                            <TextInput id="enabled-id" name="enabled" placeholder="Password" />
                        </FormField>
                        <Button type="submit" label="Let's Go!" primary />
                    </Box>
                </Form>
            </Box>
        </Grommet>

    )
}

export default Signup;