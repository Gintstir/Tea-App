const s3 = require('../../config/aws-connection')
require('dotenv').config();

const loadImageToServer = async (params) => {
    return new Promise((res, rej) => {
        s3.upload(params, function(err, data) {
            if (err) {
                rej({ result: false, message: err })
            }
            res({ result: true, message: `File uploaded successfully. ${data.Location}` })
        })
    })
}

const imageController = {
    async loadImage (__, { image, imageName, mimeType } ) {
        try {
            image = Buffer.from(image, 'base64')
            const params = {
                Bucket: 'steep-tea-app',
                Key: imageName,
                Body: image,
                ContentType: mimeType
            }
            let isSuccess = await loadImageToServer(params)
            if (!isSuccess.result) {
                console.error(isSuccess.message)
                return false
            }
            console.log(isSuccess.message)
            return true
        } catch (e) {
            console.error(e)
        }
    },
    async removeImage (filename) {
        return new Promise ((res, rej) => {
            filename = filename.replace('https://steep-tea-app.s3.amazonaws.com/', '')
            s3.deleteObject({
                Bucket: 'steep-tea-app',
                Key: filename
            }, function (err, data) {
                if (err) {
                    rej({ result: false, message: err })
                }
                res({ result: true, message: `File deleted successfully. ${data.Location}` })
            })
        })
    }
}

// https://github.com/apollographql/apollo-server/issues/3508#issuecomment-732261211

// for testing: make sure there is a test.jpg file in the images/images folder or you can just rename it
// uncomment the command below
// then run (depending where you are in the directory): node server/images/controller/image-controller
// imageController.resizeImage(path.join(__dirname, '../images/test.JPG'), 600, undefined, 70)

module.exports = imageController