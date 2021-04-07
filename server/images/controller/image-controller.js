const path = require('path')
const { createWriteStream } = require('fs')
const jimp = require('jimp')

const imageController = {
    async loadImage (__, { image } ) {
        
        const { createReadStream, filename, mimetype, encoding } = await image
        console.log('here', image)
        console.log('here2', {
            createReadStream, filename, mimetype, encoding
        })

        await new Promise( res => 
            createReadStream()
                .pipe(createWriteStream(path.join(__dirname, '../images', filename)))
                .on('close', res)    
        )
        return true
    },
    async resizeImage (imgPath, width = 600, height = jimp.AUTO, quality = 70) {
        const image = await jimp.read(imgPath)
        await image.resize(width, height)
        await image.quality(quality)
        await image.writeAsync(imgPath)
    },
    async findImage() {
        console.log('hello from the findImage')
        return 'Hey There'
    }
}

// for testing: make sure there is a test.jpg file in the images/images folder or you can just rename it
// uncomment the command below
// then run (depending where you are in the directory): node server/images/controller/image-controller
// imageController.resizeImage(path.join(__dirname, '../images/test.JPG'), 600, undefined, 70)

module.exports = imageController