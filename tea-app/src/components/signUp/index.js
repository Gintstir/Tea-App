import React, { useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
// import { grommet } from "grommet/themes";
import { Grommet, Box, Form, FormField, TextInput, grommet, Button } from "grommet";
import { deepMerge } from 'grommet/utils';

import { Link } from "react-router-dom";

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

function Signup(props) {
    const [ formState, setFormState ] = useState({username: '', email: '', password: '' });
    const [ addUser, { error } ] = useMutation(ADD_USER);
    //const inputRef = useRef();

    // useEffect(() => {
    //   inputRef.current.focus();
    // }, []);

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
            <Box align="center" pad="large">
                <h1>Sign Up!</h1>
                <Form onSubmit={handleFormSubmit}>
                    <Box border gap="medium" pad="large" width="medium">
                        <FormField 
                          htmlFor="username"
                          name="username"
                          type="username"
                          label="Username"
                          >
                            <TextInput 
                              id="username"
                              name="username"
                              placeholder="Username"
                              onChange={handleChange} />
                        </FormField>
                        <FormField htmlFor="email" name="email" label="Email" >
                            <TextInput id="email" name="email" type="email" placeholder="Email" onChange={handleChange}/>
                        </FormField>
                        <FormField htmlFor="password" name="password" label="Password" >
                            <TextInput id="password" name="password"  type="password" placeholder="Password" onChange={handleChange}/>
                        </FormField>
                        <Button type="submit" label="Welcome!" primary />
                    </Box>
                </Form>
                <Link to='/signin'>Sign-in Instead</Link>
                {error && <div>Sign up failed</div>}
            </Box>
        </Grommet>

    )
}

export default Signup;