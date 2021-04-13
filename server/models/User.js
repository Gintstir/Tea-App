const mongoose = require('mongoose');

const { Schema } = mongoose;

const bcrypt = require('bcrypt');

//This is the user model, here we can see that every user needs a username, email, and password.
//Each User also has associated arrays of :
//      - Teas(kinds of tea that have at home)
//      - Extra(stuff they would add to tea like milk, honey, sugar, lemon, etc)
//      - Recipes(Recipes they have created)

const teaSchema = require('./Tea')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: [true, 'This username/email has already been used'],
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: [true, 'This username/email has already been used'],
            match: [/.+@.+\..+/, 'Incorrect email format!']
        },
        password: {
            type: String,
            required: true,
            minLength: [8, 'Password needs to be atleast 8 characters']
        },
        teas: [
            teaSchema
        ],
        recipes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Recipe'
            }
        ],
        extras: [
            {
                type: String
            }
        ],
        avatar: {
            type: String
        }
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
