import React, { useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';
// import { grommet } from "grommet/themes";
import { Grommet, Box, Form, FormField, TextInput, grommet, Button } from "grommet";
import { deepMerge } from 'grommet/utils';

import { Link } from "react-router-dom";

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
      
      }
    
  },
  formField: {
    border: {
      error: {
        color: 'border',
      },
      color: 'border',
      side: 'all',
    }, 
    round: '8px',
    label: {
      size: 'medium',
      color: 'purple',
      margin: {
        horizontal: 'none',
      },
      textAlign: 'center'
    },
  },
  
  textInput:{
    textAlign: "center"
  },
  placeholder: {
    extend: () => `
      width: 100%
    `
  }
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
          <Box border gap="medium" pad="large" width="medium" background="orange">
            <FormField htmlFor="username" name="username" type="text" label="Username" contentProps={{ background: "lightblue" }}>
                <TextInput                                    
                  id="username"
                  name="username"                  
                  type="text"
                  onChange={handleChange}
                  />

            </FormField>
            <FormField
              htmlFor="password"
              name="password"
              type="password"
              label="Password"
              contentProps={{
                background: "lightblue"
              }}
              >
                <TextInput
                  id="password"
                  name="password"                  
                  type="password"
                  onChange={handleChange}
                  contentProps={{
                    background: "lightblue"}}
                  />
            </FormField>
            <Button type="submit" label="Let's Go!" primary color="purple"/>
          </Box>
        </Form>
        {/* <Link to='/signup'>Sign-up Instead</Link> */}
        {error && <div>Login Failed</div>}
      </Box>
    </Grommet>
  )
};

export default SignIn;
