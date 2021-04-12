import React, { useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';


import { Grommet, Box, Form, TextInput, grommet, Button } from "grommet";
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
      
    },
    input: {
      padding: {
        horizontal: "small",
        vertical: "medium"      
      },      
    },    
  },  
  textInput: {
    extend: () => `
      font-size: 20px;
      background: lightblue;
      
      &:focus {
        border-color: red;
        box-shadow: none;
      }      
    `
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
          <Box fill gap="medium" align="center" pad="large" width="medium" background="orange">
              <Box width="medium">
                <TextInput                                    
                    id="username"
                    name="username"                  
                    //type="username"
                    onChange={handleChange}
                    placeholder="Username"
                    textAlign="center"
                />
              </Box>
              <Box 
                width="medium"                
              >
                <TextInput
                  id="password"
                  name="password"                  
                  type="password"                  
                  onChange={handleChange}
                  placeholder="Password"
                  textAlign="center"
                />                
              </Box>          
            <Button type="submit" label="Let's Go!" primary color="purple"/>
          </Box>
        </Form>
        <Box pad="medium">
          <Link to='/signup'>Not A member? Sign-up Instead!</Link>
          <Box align="center" >
          {error && <div color="status-error">Login Failed</div>}
          </Box>
        </Box>
      </Box>
    </Grommet>
  )
};

export default SignIn;
