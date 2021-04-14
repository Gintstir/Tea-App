import React, { useState } from "react";
import { nanoid } from "nanoid";
import Jimp from "jimp/es"

import {
  Form,
  FormField,
  TextInput,
  Box,
  Button,
  Grommet,
  Paragraph,
  RangeInput,
  grommet
} from "grommet";

import Upload from '../Upload'
import PantryShelf from '../PantryShelf'

import { useMutation } from "@apollo/react-hooks";

import {deepMerge} from 'grommet/utils';

import { ADD_RECIPE, UPLOAD_IMAGE } from "../../utils/mutations";
import { QUERY_ME } from '../../utils/queries'

const customTheme = deepMerge(grommet, {
    global: {
        colors: {
            purple: "#A2065A",
        },
        font: {
            family: `Abhaya Libre`,            
        },
    }
})

const NewRecipe = ({ setShow, teas, extras, setAddNotification }) => {
    const [image, setImage] = useState();
    const [selectedExtras, setExtras] = useState([]);
    const [selectedTea, setTea] = useState();
    const [formValue, setFormValue] = useState({
        type: "",
        name: "",
        brand: "",
        extra: [],
        temperature: "",
        steepTime: "",
        note: "",
    });

    const [addRecipe] = useMutation(ADD_RECIPE, {
        update(cache, { data: { addRecipe }}) {
            try {
                const { me } = cache.readQuery({ query: QUERY_ME })
                me.recipes.unshift(addRecipe)
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me }
                })
      
            } catch (e) {
                console.warn("The query has not run, therefore no need to update!")
            }
        }
    });
    const [uploadImage] = useMutation(UPLOAD_IMAGE);

    const handleSubmit = async (value) => {
        let imageName
        let uploadImageString

        if (image) {
            imageName = generateFileName(image?.name)
            uploadImageString = await resizeImage(image)
            uploadImageString = uploadImageString.split('base64,')[1]
        }

        value.type = selectedTea.type
        value.name = selectedTea.name
        value.brand = selectedTea.brand
        value.extra = selectedExtras
        value.steepTime = parseInt(value.steepTime)

        Promise.all([
            addRecipe({ variables: { ...value, picture: imageName} }),
            uploadImage({ variables: { image: uploadImageString, imageName }})
        ]).then(values => {
            setImage()
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
            setAddNotification({show: true, type: 'success', message: 'Recipe added successfully!'})
            setTimeout(() => {
                setAddNotification({show: false, type: '', message: ''})
            }, 3000)
        })
        .catch(err => {
            console.error(err)
        })
    }

    const generateFileName = (oldFilename) => {
        let fileExt = oldFilename.split('.')
        fileExt = fileExt[fileExt.length - 1]
        return nanoid() + '.' + fileExt
    }

    const resizeImage = async (image, width = 600, height = Jimp.AUTO, quality = 70) => {
        const brandNewImg = await convertImageToBuffer(image)

        return new Promise((res, rej) => {
            Jimp.read(brandNewImg)
            .then(image => {
                const rotate = (image.bitmap.width < image.bitmap.height) && (image._exif.imageSize.height < image._exif.imageSize.width)

                console.log(image._exif.imageSize, rotate)

                return image
                    .resize(width, height)
                    .quality(quality)
                    .rotate(rotate ? 90 : 0)
                    .getBase64Async(image._originalMime)
            })
            .then(readyImg => res(readyImg))
            .catch(err => rej(err))
        })
    }

    const convertImageToBuffer = async (image) => {
        return new Promise((res, rej) => {
            const reader = new FileReader()

            reader.onload = (event) => {
                res(event.target.result)
            }
            reader.onerror = (err) => {
                console.error(err)
                rej(err)
            }

            reader.readAsDataURL(image)
        })
    }

    const convertToTimer = (timeSeconds) => {

        if(!timeSeconds) {
            return ''
        }

        timeSeconds = parseInt(timeSeconds)

        if(timeSeconds < 60) {
            return `(${timeSeconds} sec)`
        } else {
            return `(${Math.floor(timeSeconds/60)} min ${timeSeconds%60} sec)`
        }
    }

    return (
        <Grommet theme={customTheme}>
            <Box justify="center">
                <Form
                    value={formValue}
                    onChange={nextValue => setFormValue(nextValue)}
                    onReset={() => {
                        setImage()
                        setExtras([])
                        setTea()
                        setFormValue({
                            type: '',
                            name: '',
                            brand: '',
                            extra: [],
                            temperature: '',
                            steepTime: '',
                            note: ''
                        })
                    }}
                    onSubmit={ async ({value}) => handleSubmit(value) }
                >
                    <Paragraph  size="large" color={"#9e9e9e"} margin={{horizontal: "32px", vertical: "6px"}}>Teas</Paragraph>
                    <PantryShelf shelfName={"Tea"} pantryData={teas} canSelect={true} canDelete={false} setItem={setTea} item={selectedTea} />
                    <Paragraph   size="large" color={"#9e9e9e"} margin={{horizontal: "32px", vertical: "6px"}}>Extras</Paragraph>
                    <PantryShelf shelfName={"Extra"} pantryData={extras} canSelect={true} canDelete={false} setItem={setExtras} item={selectedExtras}  />
                    <FormField  name="temperature" htmlFor="tea-temperature-id" label="Temperature" contentProps={{border: false}} margin={{horizontal: "20px"}} required={true}>
                        <TextInput  type="text" id="tea-temperature-id" name="temperature" />
                    </FormField>
                    <FormField  name="steepTime" htmlFor="tea-steepTime-id" label={`Steep Time ${convertToTimer(formValue.steepTime)}`} contentProps={{border: false}} margin={{horizontal: "20px"}}  required={true}>
                        <RangeInput  name="steepTime" min={0} max={360} step={10}/>
                    </FormField>
                    <FormField  type="text" name="note" htmlFor="tea-note-id" label="Notes" contentProps={{border: false}} margin={{horizontal: "20px"}}  required={true}>
                        <TextInput type="text" id="tea-note-id" name="note" />
                    </FormField>
                    <FormField  name="image" htmlFor="tea-image-id" label="Picture" contentProps={{border: false}} margin={{horizontal: "20px"}}>
                        <Upload setImage={setImage} />
                    </FormField>
                    <Box direction="row" gap="medium" margin={{top: "15px"}} justify="center">
                        <Button type="submit" primary label="Submit" color="purple"/>
                        <Button type="reset" label="Reset" color="purple"/>
                    </Box>
                </Form>
            </Box>
        </Grommet>
    );
};

export default NewRecipe