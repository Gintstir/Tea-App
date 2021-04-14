const path = require('path')
const fs = require('fs')

const loadImageToServer = async (buffer, filename) => {
    fs.writeFileSync(path.join(__dirname, '../images', filename), buffer)
}

const imageController = {
    async loadImage (__, { image, imageName } ) {
        try {
            image = Buffer.from(image, 'base64')
            let isSuccess = loadImageToServer(image, imageName)
            if (!isSuccess) {
                return false
            }
            return true
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