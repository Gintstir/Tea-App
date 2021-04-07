const path = require('path')
const fs = require('fs')

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
    async returnImage (req, res) {
        const name = req.params.name
        const image = await Image.findOne({name}).lean()
        const buf = image.img.data.buffer
        const type = image.img.contentType.split('/')[1]
        fs.writeFileSync(path.join(__dirname, `../sent-file.${type}`), buf)
        res.sendFile(path.join(__dirname, `../sent-file.${type}`))
    }
}

module.exports = imageController