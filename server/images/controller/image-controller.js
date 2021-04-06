const path = require('path')
const fs = require('fs')

const { Image } = require('../../models')

const imageController = {
    async testing (req, res) {
        res.sendFile(path.join(__dirname, '../mountains-river.png'));
    },
    async loadImage (req, res) {
        const imgData = fs.readFileSync(path.join(__dirname, '../mountains-river.png'))
        console.log(imgData)
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
    async returnImage (req, res) {
        const image = await Image.findOne({}).lean()
        const buf = image.img.data.buffer
        const type = image.img.contentType.split('/')[1]
        fs.writeFileSync(path.join(__dirname, `../sent-file.${type}`), buf)
        res.sendFile(path.join(__dirname, `../sent-file.${type}`))
    }
}

module.exports = imageController