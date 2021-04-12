import React, { useState } from "react";
import { nanoid } from "nanoid";

import {
  Form,
  FormField,
  TextInput,
  Box,
  Button,
  Grommet,
  Text,
  CheckBoxGroup,
  grommet

<<<<<<< HEAD
import Upload from '../Upload'
import PantryShelf from '../PantryShelf'
=======
} from "grommet";
import { deepMerge } from 'grommet/utils';
import { useMutation } from "@apollo/react-hooks";
>>>>>>> 57148b1d7b3ddfef14d279f8ad38917dc4b395b3

import Upload from "../Upload";

import { ADD_RECIPE, UPLOAD_IMAGE } from "../../utils/mutations";

const customTheme = deepMerge(grommet, {
    global: {
        input: {
            padding: {
                vertical: "20px"
            }
        },
        colors: {
            placeholder: "#A2065A"
        }
    }
})

<<<<<<< HEAD
const NewRecipe = ({ setShow, teas, extras }) => {
=======
const NewRecipe = ({ setShow }) => {
  const [image, setImage] = useState();
>>>>>>> 57148b1d7b3ddfef14d279f8ad38917dc4b395b3

  const [formValue, setFormValue] = useState({
    type: "",
    name: "",
    brand: "",
    extra: [],
    temperature: "",
    steepTime: "",
    note: "",
  });

  const [addRecipe, { error }] = useMutation(ADD_RECIPE);

  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const handleSubmit = (value) => {
    // console.log(nanoid())
    let imageName;
    if (image) {
      imageName = generateFileName(image?.name);
    }

    const generateFileName = (oldFilename) => {
        let fileExt = oldFilename.split('.')
        fileExt = fileExt[fileExt.length - 1]
        return nanoid() + '.' + fileExt
    }

    return (
        <Grommet>
            <Box justify="center">
                <Form
                    value={formValue}
                    onChange={nextValue => setFormValue(nextValue)}
                    onReset={() => setFormValue({
                        type: '',
                        name: '',
                        brand: '',
                        extra: [],
                        temperature: '',
                        steepTime: '',
                        note: ''
                    })}
                    onSubmit={ async ({value}) => handleSubmit(value) }
                >
                    <FormField name="type" htmlFor="tea-type-id" label="Type" contentProps={{border: false}} pad={true} required={true}>
                        <PantryShelf />

                    </FormField>
                    <FormField name="extra" htmlFor="tea-extra-id" label="Extra" contentProps={{border: false}} pad={true} required={true}>
                        <CheckBoxGroup options={["Milk", "Sugar", "Honey"]} id="tea-extra-id" name="extra" />
                    </FormField>
                    <FormField name="temperature" htmlFor="tea-temperature-id" label="Temperature" contentProps={{border: false}} pad={true} required={true}>
                        <TextInput type="text" id="tea-temperature-id" name="temperature" />
                    </FormField>
                    <FormField name="steepTime" htmlFor="tea-steepTime-id" label="Steep Time" contentProps={{border: false}} pad={true} required={true}>
                        <TextInput type="number" id="tea-steepTime-id" name="steepTime" />
                    </FormField>
                    <FormField type="text" name="note" htmlFor="tea-note-id" label="Note" contentProps={{border: false}} pad={true} required={true}>
                        <TextInput type="text" id="tea-note-id" name="note" />
                    </FormField>
                    <FormField name="image" htmlFor="tea-image-id" label="Picture" contentProps={{border: false}} pad={true} required={true}>
                        <Upload setImage={setImage} />
                    </FormField>
                    <Box direction="row" gap="medium"  justify="center">
                        <Button type="submit" primary label="Submit" />
                        <Button type="reset" label="Reset" />
                    </Box>
                </Form>
                { error && <Text>{error.message}</Text>}    
            </Box>
          </Box>
        </Form>
        {error && <Text>{error.message}</Text>}
      </Box>
    </Grommet>
  );
};

export default NewRecipe;
