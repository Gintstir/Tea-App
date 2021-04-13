import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { Form, FormField, TextInput, Box, Button, Grommet, grommet } from "grommet";
import { deepMerge } from 'grommet/utils';

import Auth from '../../utils/auth'

import { ADD_TEA } from "../../utils/mutations";

import TeaButtons from '../TeaButtons'

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
  },    
});

const NewTea = ({ setAddNotification }) => {

  const [selectedTea, setSelectedTea] = useState({})
  const [value, setValue] = useState({
    type: {},
    name: "",
    brand: "",
  });

  value.type = selectedTea

  const [addTea] = useMutation(ADD_TEA);

  const validateForm = (obj) => {
    if (!obj.type || !obj.name || !obj.brand) {
      setAddNotification({show: true, type:'error', message: "Please fill out all of the fields!"})
      return false
    }
    return true
  }

  const handleSubmit = async (values) => {

    const token = Auth.loggedIn() ? Auth.getToken() : null

    if (!token) {
        return false
    }

    values.type = values.type.name

    if (!validateForm(values)) {
      return
    }
    try {
      await addTea({
        variables: values,
      });
      setSelectedTea({})
      setValue({
        type: {},
        name: "",
        brand: "",
      });
      setAddNotification({show: true, type:'success', message: "Tea added successfully!"})
      setTimeout(() => {
        setAddNotification({show: false, type: '', message: ''})
      }, 3000)
    } catch (e) {
      setAddNotification({show: true, type:'error', message: `Error: ${e.message.replace('GraphQL error: ', '')}`})
      setTimeout(() => {
        setAddNotification({show: false, type: '', message: ''})
      }, 3000)
      console.error(e)
    }
  };

  return (
    <Grommet theme={customTheme}>
      <Box justify="center">
        <Form
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue)
          }}
          onReset={() =>
            {
              setSelectedTea({})
              setValue({
                type: {},
                name: "",
                brand: "",
              })
            }
          }
          onSubmit={async ({ value }) => handleSubmit(value)}
        >
          <FormField style={{fontFamily: "Abhaya Libre"}} name="type" htmlFor="tea-type-id" label="Type" contentProps={{border: false}} pad={true}>
            <TeaButtons selectedTea={selectedTea} setSelectedTea={setSelectedTea} cardHeight={100} cardWidth={150} />
          </FormField>
          <FormField style={{fontFamily: "Abhaya Libre"}} name="name" htmlFor="tea-name-id" label="Name" contentProps={{border: false}} pad={true} required={true}>
            <TextInput id="tea-name-id" name="name" />
          </FormField>
          <FormField style={{fontFamily: "Abhaya Libre"}} name="brand" htmlFor="tea-brand-id" label="Brand" contentProps={{border: false}} pad={true} required={true}>
            <TextInput id="tea-brand-id" name="brand" />
          </FormField>
          <Box direction="row" gap="medium" justify="center">
            <Button style={{fontFamily: "Abhaya Libre"}} type="submit" primary color="purple" label="Submit" />
            <Button style={{fontFamily: "Abhaya Libre"}} type="reset" label="Reset" color="purple"/>
          </Box>
        </Form>
      </Box>
    </Grommet>
  );
};

export default NewTea;
