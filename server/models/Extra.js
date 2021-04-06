const mongoose = require('mongoose');

const { Schema } = mongoose;

//this is for stuff like milk, honey, sugar, lemon, etc.

const extraSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
)

const Extra = mongoose.model('Extra', extraSchema);

module.exports = Extra;

