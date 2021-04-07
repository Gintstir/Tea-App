const mongoose = require('mongoose');

const { Schema } = mongoose;

// const Tea = require('./Tea');
// const Extra = require('./Extra');
// const Picture = require('./Picture');

// This is the Recipe model, User can add:
// - tea from their Tea collection
// - add an extra
// - brewing tempurature
// - steep time
// - add a picture
// - add a tasting note to the recipe 
// - createdAt: noting when the recipe was made

const recipeSchema = new Schema(
    {
        tea: {
            type: Schema.Types.ObjectId,
            ref: 'Tea',
            required: true
        },
        extra: [
            {
                type: String
            }
            
        ],
        temperature: {
            type: String,
            required: true,
        },
        steepTime: {
            type: Number,
            min: 0,
            default: 5
        },
        picture: {
            type: Schema.Types.ObjectId,
            ref: 'Picture',
        },
        note: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
