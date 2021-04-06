const mongoose = require('mongoose');

const { Schema } = mongoose;

const Tea = require('./Tea');
const Extra = require('./Extra');
const Picture = require('./Picture');

const recipeSchema = new Schema(
    {
        tea: {
            type: Schema.Types.ObjectId,
            ref: 'Tea',
            required: true
        },
        extra: {
            type: Schema.Types.ObjectId,
            ref: 'Extra',
            required: true
        },
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
)