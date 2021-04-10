import React, { useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';
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
      size: 'small',
      color: 'text-weak',
      margin: {
        horizontal: 'none',
      },
    },
    round: '8px',
  },
});

function SignIn (props) {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [login, {error}] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { username: formState.username, password: formState.password } } )
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch(e) {
      console.log(e)
    }
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
        <h1> Login! </h1>
        <Form onSubmit={handleFormSubmit}>
          <Box border gap="medium" pad="large" width="medium">
            <FormField
              htmlFor="username"
              name="username"
              type="username"
              label="username"
              >
                <TextInput
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  />

            </FormField>
            <FormField
              htmlFor="password"
              name="password"
              type="password"
              label="password"
              >
                <TextInput
                  id="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  />
            </FormField>
            <Button type="submit" label="Let's Go!" primary />
          </Box>
        </Form>
        {error && <div>Login Failed</div>}
      </Box>
    </Grommet>
  )
};

export default SignIn;
