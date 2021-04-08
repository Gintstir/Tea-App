const { User } = require('../models')

const { AuthenticationError } = require('apollo-server-express')

const extraController = {
    async createExtra(parent, { type }, context) {
        if (context.user) {
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $addToSet: { extras: type }},
                    { new: true}
                )

                return updatedUser

            } catch (e) {
                console.error(e)
                throw new AuthenticationError('Extra was unable to be saved')
            }
        }

        throw new AuthenticationError('You must be logged in')
    },
    async removeExtra(parent, { type }, context) {
        if (context.user) {
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { extras: type }},
                    { new: true}
                )

                return updatedUser

            } catch (e) {
                console.error(e)
                throw new AuthenticationError('Extra was unable to be removed')
            }
        }

        throw new AuthenticationError('You must be logged in')
    }
}

module.exports = extraController