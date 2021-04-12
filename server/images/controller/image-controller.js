const path = require('path')
const { createWriteStream } = require('fs')
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
    async loadImage (__, { image, imageName } ) {
        try {
            const { createReadStream } = await image
            // const newFilename = generateFilename(filename)
            let isSuccess = await loadImageToServer(createReadStream, imageName)
            if (!isSuccess) {
                return false
            }
            isSuccess = await resizeImage(path.join(__dirname, '../images', imageName))

            if (isSuccess) {
                return true
            } else {
                return false
            }
        } catch (e) {
            console.error(e)
        }
    }
}

// https://github.com/apollographql/apollo-server/issues/3508#issuecomment-732261211

// for testing: make sure there is a test.jpg file in the images/images folder or you can just rename it
// uncomment the command below
// then run (depending where you are in the directory): node server/images/controller/image-controller
// imageController.resizeImage(path.join(__dirname, '../images/test.JPG'), 600, undefined, 70)

module.exports = imageController