const path = require('path')
const fs = require('fs')
const jimp = require('jimp')

const { Image } = require('../../models')

const imageController = {
    async loadImage (req, res) {
        const imgData = fs.readFileSync(path.join(__dirname, '../mountains-river.png'))
        const newImg = await Image.create(
            { 
                name: '12345',
                img: {
                    data: imgData,
                    contentType: 'image/png'
                }
            }
        )
        if (newImg) {
            res.json({ message: "success" })
        } else {
            res.status(500).json({ error: 'there was an error uploading this image'})
        }
    },
    async resizeImage (imgPath, width = 600, height = jimp.AUTO, quality = 70) {
        const image = await jimp.read(imgPath)
        await image.resize(width, height)
        await image.quality(quality)
        await image.writeAsync(imgPath)
    }
}

// for testing: make sure there is a test.jpg file in the images/images folder or you can just rename it
// uncomment the command below
// then run (depending where you are in the directory): node server/images/controller/image-controller
// imageController.resizeImage(path.join(__dirname, '../images/test.JPG'), 600, undefined, 70)

module.exports = imageController