const mongoose = require('mongoose');

const { Schema } = mongoose;

const bcrypt = require('bcrypt');

const Tea = require('./Tea');
const Recipe = require('./Recipe');
const Extra = require('./Extra');



//This is the user model, here we can see that every user needs a username, email, and password.
//Each User also has associated arrays of :
//      - Teas(kinds of tea that have at home)
//      - Extra(stuff they would add to tea like milk, honey, sugar, lemon, etc)
//      - Recipes(Recipes they have created)

const userSchema = new Schema(
    {
        username: {
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
        ],
        extras: [
            Extra.Schema
        ]
    }
);

//set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

//compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
