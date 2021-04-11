import React from 'react'

import { Box, Grommet, FileInput, Text } from 'grommet'
import { Trash } from 'grommet-icons'

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

const Upload = ({ setImage }) => {

    const handleChange = (event) => {
        const file = event.target.files[0]
        setImage(file)
    }

    return(
        <Grommet theme={customTheme}>
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
                onChange={handleChange}
            />
        </Grommet>
    )
}

export default Upload