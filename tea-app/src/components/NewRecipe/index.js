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
import { QUERY_ME, QUERY_RECIPES } from '../../utils/queries'

import Auth from '../../utils/auth'
import TempButtons from "../TempButtons";

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

const NewRecipe = ({ setShow, teas, extras, setAddNotification, setLoadingRecipe }) => {
    const [image, setImage] = useState();
    const [selectedExtras, setExtras] = useState([]);
    const [selectedTea, setTea] = useState({});
    const [selectedTemp, setSelectedTemp] = useState({})
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
            try {
                const { recipes } = cache.readQuery({ query: QUERY_RECIPES })
                recipes.unshift(addRecipe)
                cache.writeQuery({
                    query: QUERY_RECIPES,
                    data: { recipes }
                })
      
            } catch (e) {
                console.warn("The query has not run, therefore no need to update!")
            }

        }
    });
    const [uploadImage] = useMutation(UPLOAD_IMAGE);

    const validateEntries = (value) => {
        if (!selectedTea.name) {
            setAddNotification({show: true, type: 'warning', message: 'Please select a tea'})
            setTimeout(() => {
                setAddNotification({show: false, type: '', message: ''})
            }, 3000)
            return false
        }
        if (!selectedTemp.temp) {
            setAddNotification({show: true, type: 'warning', message: 'Please select a temperature'})
            setTimeout(() => {
                setAddNotification({show: false, type: '', message: ''})
            }, 3000)
            return false
        }
        if (!value.steepTime) {
            setAddNotification({show: true, type: 'warning', message: 'Please select how long your tea steeped for'})
            setTimeout(() => {
                setAddNotification({show: false, type: '', message: ''})
            }, 3000)
            return false
        }
        if (!value.note) {
            setAddNotification({show: true, type: 'warning', message: 'Please enter a note describing your tea'})
            setTimeout(() => {
                setAddNotification({show: false, type: '', message: ''})
            }, 3000)
            return false
        }
        return true
    }

    const handleSubmit = async (value) => {

        const token = Auth.loggedIn() ? Auth.getToken() : null

        if (!token) {
            Auth.logout()
            return false
        }

        if (!validateEntries(value)) {
            return
        }

        setLoadingRecipe(true)
        setShow(false)

        let imageName
        let uploadImageString
        let mimeType
        let isImageProvided = true

        if (image) {
            mimeType = image.type
            imageName = generateFileName(image?.name)
            uploadImageString = await resizeImage(image)
            uploadImageString = uploadImageString.split('base64,')[1]
        } else {
            isImageProvided = false
            imageName = 'default.png'
        }

        value.type = selectedTea.type
        value.name = selectedTea.name
        value.brand = selectedTea.brand
        value.extra = selectedExtras
        value.temperature = selectedTemp.temp
        value.steepTime = parseInt(value.steepTime)

        Promise.all([
            addRecipe({ variables: { ...value, picture: imageName} }),
            isImageProvided && uploadImage({ variables: { image: uploadImageString, imageName, mimeType }})
        ]).then(values => {
            setImage()
            setExtras([])
            setTea({})
            setSelectedTemp({})
            setFormValue({
                type: '',
                name: '',
                brand: '',
                extra: [],
                temperature: '',
                steepTime: '',
                note: ''
            })
            setLoadingRecipe(false)
            setAddNotification({show: true, type: 'success', message: 'Recipe added successfully!'})
            setTimeout(() => {
                setAddNotification({show: false, type: '', message: ''})
            }, 3000)
        })
        .catch(err => {
            setAddNotification({show: true, type: 'error', message: 'Error occured while adding recipe!'})
            setTimeout(() => {
                setAddNotification({show: false, type: '', message: ''})
            }, 3000)
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
        <Grommet theme={customTheme} style={{backgroundColor: "transparent"}}>
            <Box justify="center" margin={{bottom: "large"}}>
                <Form
                    value={formValue}
                    onChange={nextValue => setFormValue(nextValue)}
                    onReset={() => {
                        setImage()
                        setExtras([])
                        setTea({})
                        setSelectedTemp({})
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
                    style={{backgroundColor: "transparent"}}
                >
                    <Paragraph  size="large" color={"#9e9e9e"} margin={{horizontal: "32px", vertical: "6px"}}>Teas</Paragraph>
                    <PantryShelf shelfName={"Tea"} pantryData={teas} canSelect={true} canDelete={false} setItem={setTea} item={selectedTea} displayFooter={true} />
                    <Paragraph   size="large" color={"#9e9e9e"} margin={{horizontal: "32px", vertical: "6px"}}>Extras</Paragraph>
                    <PantryShelf shelfName={"Extra"} pantryData={extras} canSelect={true} canDelete={false} setItem={setExtras} item={selectedExtras}  />
                    <FormField  name="temperature" htmlFor="tea-temperature-id" label="Temperature" contentProps={{border: false}} margin={{horizontal: "20px"}}>
                        <TempButtons selectedTemp={selectedTemp} setSelectedTemp={setSelectedTemp} cardWidth={75} />
                    </FormField>
                    <FormField  name="steepTime" htmlFor="tea-steepTime-id" label={`Steep Time ${convertToTimer(formValue.steepTime)}`} contentProps={{border: false}} margin={{horizontal: "20px"}} >
                        <RangeInput  name="steepTime" min={0} max={360} step={10}/>
                    </FormField>
                    <FormField  type="text" name="note" htmlFor="tea-note-id" label="Notes" contentProps={{border: false}} margin={{horizontal: "20px"}} >
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