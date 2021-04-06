const mongoose = require('mongoose');

const { Schema } = mongoose;

const teaSchema = new Schema(
    {
        type: {
            type: String,
            required: true,        
        },
        name: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        }
    }
)

const Tea = mongoose.model("Tea", teaSchema);

module.exports = Tea;