import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import { Form, FormField, TextInput, Box, Button, Grommet, Text, CheckBoxGroup} from 'grommet'
import { useMutation } from '@apollo/react-hooks'

import Upload from '../Upload'

import { ADD_RECIPE, UPLOAD_IMAGE } from '../../utils/mutations'

const NewRecipe = ({ setShow }) => {

    const [image, setImage] = useState()

    const [formValue, setFormValue] = useState({
        type: '',
        name: '',
        brand: '',
        extra: [],
        temperature: '',
        steepTime: '',
        note: ''
    })
    
    const [addRecipe, { error }] = useMutation(ADD_RECIPE)

    const [uploadImage] = useMutation(UPLOAD_IMAGE)

    const handleSubmit = (value) => {
        
        // console.log(nanoid())
        let imageName
        if (image) {
            imageName = generateFileName(image?.name)
        }

        value.steepTime = parseInt(value.steepTime)
        
        Promise.all([
            addRecipe({ variables: { ...value, picture: imageName} }),
            uploadImage({ variables: { image, imageName }})
        ]).then(values => {
            setFormValue({
                type: '',
                name: '',
                brand: '',
                extra: [],
                temperature: '',
                steepTime: '',
                note: ''
            })

            setShow(false)
        })
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
                    <FormField name="type" htmlFor="tea-type-id" label="Type">
                        <TextInput type="text" id="tea-type-id" name="type" />
                    </FormField>
                    <FormField name="name" htmlFor="tea-name-id" label="Name">
                        <TextInput type="text" id="tea-name-id" name="name" />
                    </FormField>
                    <FormField name="brand" htmlFor="tea-brand-id" label="Brand">
                        <TextInput type="text" id="tea-brand-id" name="brand" />
                    </FormField>
                    <FormField name="extra" htmlFor="tea-extra-id" label="Extra">
                        <CheckBoxGroup options={["Milk", "Sugar", "Honey"]} id="tea-extra-id" name="extra" />
                    </FormField>
                    <FormField name="temperature" htmlFor="tea-temperature-id" label="Temperature">
                        <TextInput type="text" id="tea-temperature-id" name="temperature" />
                    </FormField>
                    <FormField name="steepTime" htmlFor="tea-steepTime-id" label="Steep Time">
                        <TextInput type="number" id="tea-steepTime-id" name="steepTime" />
                    </FormField>
                    <FormField type="text" name="note" htmlFor="tea-note-id" label="Note">
                        <TextInput type="text" id="tea-note-id" name="note" />
                    </FormField>
                    <FormField name="image" htmlFor="tea-image-id" label="Picture">
                        <Upload setImage={setImage} />
                    </FormField>
                    <Box direction="row" gap="medium"  justify="center">
                        <Button type="submit" primary label="Submit" />
                        <Button type="reset" label="Reset" />
                    </Box>
                </Form>
                { error && <Text>{error.message}</Text>}    
            </Box>
        </Grommet>
    )
}

export default NewRecipe