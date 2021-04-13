import React, { useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

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
      }
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
  }
});

const Register = () => {
  const [ formState, setFormState ] = useState({username: '', email: '', password: '' });
  const [ addNotification, setAddNotification ] = useState({show: false, type: '', message: ''})
  
  const [ addUser ] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username, email: formState.email, password: formState.password 
        }
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.log(e.message)
      setAddNotification({show: true, type:'error', message: `Error occured while signing you up!`})
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
      <Box align="center" pad="large" >
        <h1 >Sign Up!</h1>
        <Form onSubmit={handleFormSubmit} >
            <Box fill align="center" gap="medium" pad="large" width="medium" background="orange">
                <Box width="medium">                  
                  <TextInput 
                      type="text"
                      id="username"
                      name="username"                              
                      onChange={handleChange}
                      placeholder="Username"
                      textAlign="center"
                                                           
                      />          
                </Box>
                <Box width="medium">                  
                    <TextInput 
                      type="email"
                      id="email"
                      name="email"                      
                      onChange={handleChange}
                      placeholder="Email"
                      textAlign="center"
                        
                      />                
                </Box>
                <Box width="medium">                  
                    <TextInput
                      type="password"
                      id="password"
                      name="password"                     
                      onChange={handleChange}
                      placeholder="Password"
                      textAlign="center"
                      
                    />                
                </Box>
                <Button  type="submit" label="Welcome!" primary color="purple" />
            </Box>
        </Form>
        <Box pad="medium">
          <Link  to='/signin'>Already a member? Click here to sign in</Link>
        </Box>
      </Box>
    </Grommet>
  )
}

export default Register;