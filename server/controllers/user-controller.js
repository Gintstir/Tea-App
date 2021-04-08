const { User } = require('../models')

const { AuthenticationError } = require('apollo-server-express')

const { signToken } = require('../utils/auth')

const userController = {
    async getUser(parent, { username }, context) {
        let findUsername
        if (username) {
            findUsername = username
        } else if (context.user) {
            findUsername = context.user.username
        } else {
            throw new AuthenticationError('Insufficient data for finding user')
        }

        const user = await User.findOne({ username: findUsername }).populate('recipes')
        return user
    },
    async createUser(parent, args) {
        const user = await User.create(args)
        const token = signToken(user)

        return { token, user }
    },
    async loginUser(parent, { username, password }) {
        const user = await User.findOne({ username })

        if (!user) {
            throw new AuthenticationError('Incorrect credentials')
        }

        const correctPw = await user.isCorrectPassword(password)

        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials')
        }

        const token = signToken(user)

        return { token, user }
    }
}

module.exports = userController