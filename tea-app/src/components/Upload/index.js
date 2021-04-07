import React, { useState } from 'react'
import { useMutation } from "@apollo/react-hooks";

import { Box, Grommet, FileInput, Text, Form, Button } from 'grommet'
import { Trash } from 'grommet-icons'

import { UPLOAD_IMAGE } from '../../utils/API'

const customTheme = {
    fileInput: {
        background: '#f2f2f2',
        border: { size: 'medium' },
        pad: { horizontal: 'large', vertical: 'medium' },
        round: 'small',
        label: {
          size: 'large',
        },
        icons: {
          remove: Trash,
        },
        dragOver: {
          border: { color: 'focus' },
        },
        hover: {
          border: { color: 'control' },
          extend: `letterSpacing: '0.1em'`,
        }
    }
}

const Upload = () => {

    const [image, setImage] = useState()

    const [uploadImage, { error }] = useMutation(UPLOAD_IMAGE)

    const imageSubmit = async (event) => {
        event.preventDefault()
        console.log(image)
        const { data } = await uploadImage({ 
            variables: { image }
        })
        console.log(data.loadImage)
    }

    if (error) {
        return (
            <h1>error!</h1>
        )
    }

    return(
        <Grommet full theme={customTheme}>
            <Box fill align='center' justify='start' pad='large'>
                <Box width='medium'>
                    <Form onSubmit={imageSubmit}>
                        <FileInput 
                            id="recipeImage"
                            multiple={false}
                            accept={"image/jpeg, image/png"}
                            renderFile={file => (
                                <Box direction='row' gap='small'>
                                    <Text weight='bold'>{file.name}</Text>
                                    <Text color='text-weak'>{(file.size/1000/1000).toFixed(3)} mb</Text>
                                </Box>
                            )}
                            onChange={async event => {
                                const file = event.target.files[0]
                                setImage(file)
                            }}
                        />
                        <Box justify='center' direction='row' pad='small'>
                            <Button 
                                primary
                                type="submit"
                                label="Submit"
                            />
                        </Box>
                    </Form>
                </Box>
            </Box>
        </Grommet>
    )
}

export default Upload