const mongoose = require('mongoose');

const { Schema } = mongoose;

//Picture Schema: dataType is 'Buffer' which allows us to store our image as data in the form of arrays
const pictureSchema = new Schema(
    {
        image: {
            data: Buffer,
            contentType: String
        }
    }
)

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;