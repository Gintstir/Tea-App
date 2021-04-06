const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema(
    {
        Imagename: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Incorrect email format!']
        },
        password: {
            type: String,
            required: true,
            minLength: 8
        },
        teas: [
            Tea.Schema
        ],
        recipes: [
            Recipe.Schema
        ]
    }
);

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
