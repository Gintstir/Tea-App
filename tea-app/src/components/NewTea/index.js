import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import { Form, FormField, TextInput, Box, Button, Grommet, Text, grommet } from "grommet";
import { deepMerge } from 'grommet/utils';

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
  
// round: '10px',
    
});

const NewTea = ({ setAddSuccessful }) => {

  const [selectedTea, setSelectedTea] = useState({})
  const [value, setValue] = useState({
    type: {},
    name: "",
    brand: "",
  });

  value.type = selectedTea

  const [addTea, { error }] = useMutation(ADD_TEA);

  const validateForm = (obj) => {
    if (!obj.type || !obj.name || !obj.brand) {
      console.log("oops")
      return false
    }
    return true
  }

  const handleSubmit = async (values) => {
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
      setAddSuccessful({show: true, message: "Tea added successfully!"})
    } catch (e) {
      console.log(e);
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
          <FormField style={{fontFamily: "Abhaya Libre"}} name="type" htmlFor="tea-type-id" label="Type" contentProps={{border: false}} pad={true} required={true}>
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
        {error && <Text>{error.message}</Text>}
      </Box>
    </Grommet>
  );
};

export default NewTea;
