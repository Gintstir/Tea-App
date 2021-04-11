import React, { useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
// import { grommet } from "grommet/themes";
import { Grommet, Box, Form, FormField, TextInput, grommet, Button } from "grommet";
import { deepMerge } from 'grommet/utils';

import { Link } from "react-router-dom";

const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      // Overriding existing grommet colors
      brand: "#4D4CDB",
      "accent-1": "#6FFFB0",
      "accent-2": "#7FFFB0",
      "accent-3": "#8FFFB0",
      "accent-4": "#9FFFB0",
      "neutral-1": "#10873D",
      "neutral-2": "#20873D",
      "neutral-3": "#30873D",
      "neutral-4": "#40873D",
      focus: "#000",
      // Setting new colors
      blue: "#00C8FF",
      green: "#749A5C",
      teal: "#82FFF2",
      purple: "#A2065A",
      red: "#FC6161",
      orange: "#FFBC44",
      yellow: "#FFEB59",
      
      // you can also point to existing grommet colors
      brightGreen: "accent-1",
      deepGreen: "neutral-2"
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
      
    label: {
      size: 'medium',
      color: 'purple',
      margin: {
        horizontal: 'none',
      },
      textAlign: 'center'
    },
    round: '8px',
  }    
});

const SignUp = () => {
  const [ formState, setFormState ] = useState({username: '', email: '', password: '' });
  const [ addUser, { error } ] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
      event.preventDefault();
      const mutationResponse = await addUser({
          variables: {
            username: formState.username, email: formState.email, password: formState.password 
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
      console.log(name, value);
  };

  return (
    <Grommet theme={customTheme}>
      <Box align="center" pad="large" >
        <h1>Sign Up!</h1>
        <Form onSubmit={handleFormSubmit} >
            <Box border gap="medium" pad="large" width="medium" background="orange">
                <FormField 
                  htmlFor="username"
                  name="username"
                  type="username"
                  label="Username"
                  contentProps={{
                    background: "lightblue"
                  }}
                  
                  >
                    <TextInput 
                      id="username"
                      name="username"                              
                      onChange={handleChange} 
                      />
                </FormField>
                <FormField htmlFor="email" name="email" label="Email" contentProps={{
                    background: "lightblue"
                  }}>
                    <TextInput id="email" name="email" type="email" onChange={handleChange}/>
                </FormField>
                <FormField htmlFor="password" name="password" label="Password" contentProps={{
                    background: "lightblue"
                  }}>
                    <TextInput id="password" name="password"  type="password" onChange={handleChange}/>
                </FormField>
                <Button type="submit" label="Welcome!" primary color="purple" />
            </Box>
        </Form>
        <Link to='/signin'>Sign-in Instead</Link>
        {error && <div>Sign up failed</div>}
      </Box>
    </Grommet>
  )
}

export default SignUp;