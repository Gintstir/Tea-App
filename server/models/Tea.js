const mongoose = require('mongoose');

const { Schema } = mongoose;

// The tea model:
// type: black, green, white, herbal, etc.
// name: chammomile lavender, english breakfast etc.
// brand: Steep, Harney & Sons, Tazo, whatever
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

// const Tea = mongoose.model("Tea", teaSchema);

module.exports = teaSchema;