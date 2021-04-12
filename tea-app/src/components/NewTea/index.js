import React, { useState } from "react";

import {
  Form,
  FormField,
  TextInput,
  Box,
  Button,
  Grommet,
  Text
} from "grommet";

import TeaButtons from '../TeaButtons'

import { useMutation } from "@apollo/react-hooks";

import { ADD_TEA } from "../../utils/mutations";

const NewTea = () => {
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
    console.log(values)
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grommet>
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
          <FormField name="type" htmlFor="tea-type-id" label="Type" contentProps={{border: false}} pad={true} required={true}>
            <TeaButtons selectedTea={selectedTea} setSelectedTea={setSelectedTea} cardHeight={100} cardWidth={150} />
          </FormField>
          <FormField name="name" htmlFor="tea-name-id" label="Name" contentProps={{border: false}} pad={true} required={true}>
            <TextInput id="tea-name-id" name="name" />
          </FormField>
          <FormField name="brand" htmlFor="tea-brand-id" label="Brand" contentProps={{border: false}} pad={true} required={true}>
            <TextInput id="tea-brand-id" name="brand" />
          </FormField>
          <Box direction="row" gap="medium" justify="center">
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
          </Box>
        </Form>
        {error && <Text>{error.message}</Text>}
      </Box>
    </Grommet>
  );
};

export default NewTea;
