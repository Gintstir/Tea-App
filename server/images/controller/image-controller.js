const path = require('path')
const { createWriteStream } = require('fs')
const { nanoid } = require('nanoid')
const jimp = require('jimp')

const loadImageToServer = async (createReadStream, filename) => {
    return new Promise (async res => {
        try {
            await new Promise( res => 
                createReadStream()
                    .pipe(createWriteStream(path.join(__dirname, '../images', filename)))
                    .on('close', res)    
            )
            res(true)                    
        } catch (e) {
            console.error(e)
            res(false)
        }        
    })
}

const generateFilename = (oldFilename) => {
    let fileExt = oldFilename.split('.')
    fileExt = fileExt[fileExt.length - 1]
    return nanoid() + '.' + fileExt
}

const resizeImage = async (imgPath, width = 600, height = jimp.AUTO, quality = 70) => {
    return new Promise(async (res) => {
        try {
            const image = await jimp.read(imgPath)
            await image.resize(width, height)
            await image.quality(quality)
            await image.writeAsync(imgPath)
            res(true)
        } catch (e) {
            console.error(e)
            res(false)
        }
    })
}

/////////////////////////////////
// Create function that saves the image path to database

const imageController = {
    async loadImage (__, { image } ) {
        try {
            const { createReadStream, filename } = await image
            const newFilename = generateFilename(filename)
            let isSuccess = await loadImageToServer(createReadStream, newFilename)
            if (!isSuccess) {
                return false
            }
            isSuccess = await resizeImage(path.join(__dirname, '../images', newFilename))

            if (isSuccess) {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.error(e)
        }
    },
    async findImage() {
        console.log('hello from the findImage')
        return 'Hey There'
    }
}

// https://github.com/apollographql/apollo-server/issues/3508#issuecomment-732261211

// for testing: make sure there is a test.jpg file in the images/images folder or you can just rename it
// uncomment the command below
// then run (depending where you are in the directory): node server/images/controller/image-controller
// imageController.resizeImage(path.join(__dirname, '../images/test.JPG'), 600, undefined, 70)

module.exports = imageController