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
  Paragraph
} from "grommet";

import Upload from '../Upload'
import PantryShelf from '../PantryShelf'

import { useMutation } from "@apollo/react-hooks";

import { ADD_RECIPE, UPLOAD_IMAGE } from "../../utils/mutations";

const NewRecipe = ({ setShow, teas, extras }) => {
    const [image, setImage] = useState();

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
        let imageName;
        if (image) {
        imageName = generateFileName(image?.name);
        }
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
                    <Paragraph size="medium" color={"#9e9e9e"} margin={{horizontal: "32px", vertical: "6px"}}>Teas</Paragraph>
                    <PantryShelf shelfName={"Tea"} pantryData={teas} />
                    <Paragraph size="medium" color={"#9e9e9e"} margin={{horizontal: "32px", vertical: "6px"}}>Extras</Paragraph>
                    <PantryShelf shelfName={"Extra"} pantryData={extras} />
                    <FormField name="temperature" htmlFor="tea-temperature-id" label="Temperature" contentProps={{border: false}} margin={{horizontal: "20px"}} required={true}>
                        <TextInput type="text" id="tea-temperature-id" name="temperature" />
                    </FormField>
                    <FormField name="steepTime" htmlFor="tea-steepTime-id" label="Steep Time" contentProps={{border: false}} margin={{horizontal: "20px"}}  required={true}>
                        <TextInput type="number" id="tea-steepTime-id" name="steepTime" />
                    </FormField>
                    <FormField type="text" name="note" htmlFor="tea-note-id" label="Note" contentProps={{border: false}} margin={{horizontal: "20px"}}  required={true}>
                        <TextInput type="text" id="tea-note-id" name="note" />
                    </FormField>
                    <FormField name="image" htmlFor="tea-image-id" label="Picture" contentProps={{border: false}} margin={{horizontal: "20px"}} required={true}>
                        <Upload setImage={setImage} />
                    </FormField>
                    <Box direction="row" gap="medium" margin={{top: "15px"}} justify="center">
                        <Button type="submit" primary label="Submit" />
                        <Button type="reset" label="Reset" />
                    </Box>
                </Form>
                { error && <Text>{error.message}</Text>}    
            </Box>
        </Grommet>
    );
};

export default NewRecipe