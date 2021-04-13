import React, { useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';


import { Grommet, Box, Form, TextInput, grommet, Button } from "grommet";
import { deepMerge } from 'grommet/utils';

import { Link } from "react-router-dom";

import Notification from '../Notification'

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
    font: {
      family: `Abhaya Libre`,
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

const SignIn = () => {
  const [formState, setFormState] = useState({ username: '', password: '' })
  const [addNotification, setAddNotification] = useState({show: false, type: '', message: ''})
  
  const [login] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { username: formState.username, password: formState.password } } )
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch(e) {
      setAddNotification({show: true, type:'error', message: `Error: ${e.message.replace('GraphQL error: ', '')}`})
      setTimeout(() => {
        setAddNotification({show: false, type: '', message: ''})
      }, 3000)
      console.error(e)
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
      {
        addNotification.show && 
        <Notification setAddNotification={setAddNotification} addNotification={addNotification} />
      }
      <Box align="center" pad="large">
        <h1 > Login! </h1>
        <Form onSubmit={handleFormSubmit}>
          <Box fill gap="medium" align="center" pad="large" width="medium" background="orange">
              <Box width="medium">
                <TextInput                                    
                  id="username"
                  name="username"
                  onChange={handleChange}
                  placeholder="Username"
                  textAlign="center"
                  
                />
              </Box>
              <Box width="medium">
                <TextInput
                  id="password"
                  name="password"                  
                  type="password"                  
                  onChange={handleChange}
                  placeholder="Password"
                  textAlign="center"
                  
                />
              </Box>
            <Button  type="submit" label="Let's Go!" primary color="purple"/>
          </Box>
        </Form>
        <Box pad="medium">
          <Link to='/signup' >Not A member? Sign-up Instead!</Link>
        </Box>
      </Box>
    </Grommet>
  )
};

export default SignIn;
