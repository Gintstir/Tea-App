const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        img: {
            data: Buffer,
            contentType: String
        }
    }
);

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;