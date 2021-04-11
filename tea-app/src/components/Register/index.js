import React, { useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
// import { grommet } from "grommet/themes";
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
    }
  },
  textInput: {
   
    //  background: lightblue;
    //  font-size: 20px;
    
     
    
  },  
  round: '8px',
    
});

const Register = () => {
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
            <Box fill gap="medium" pad="large" width="medium" background="orange">
                <Box width="medium">                  
                    <TextInput 
                      type="username"
                      id="username"
                      name="username"                              
                      onChange={handleChange}
                      placeholder={<span>Username</span>}                      
                      />                
                </Box>
                <Box width="medium">                  
                    <TextInput 
                      type="email"
                      id="email"
                      name="email"                      
                      onChange={handleChange}
                      placeholder={<span>Email</span>}
                      />                
                </Box>
                <Box width="medium">                  
                    <TextInput
                      type="password"
                      id="password"
                      name="password"                     
                      onChange={handleChange}
                      placeholder={<span>Password</span>}
                      />                
                </Box>
                <Button type="submit" label="Welcome!" primary color="purple" />
            </Box>
        </Form>
        <Link to='/signin'>Sign-in Instead</Link>
        {error && <div>Sign up failed</div>}
      </Box>
    </Grommet>
  )
}

export default Register;