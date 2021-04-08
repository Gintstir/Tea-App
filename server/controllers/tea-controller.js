const { User } = require('../models')

const { AuthenticationError } = require('apollo-server-express')

const teaController = {
    async createTea(parent, tea, context) {
        if (context.user) {
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $addToSet: { teas: tea }},
                    { new: true}
                )

                return updatedUser

            } catch (e) {
                console.error(e)
                throw new AuthenticationError('Tea was unable to be saved')
            }
        }

        throw new AuthenticationError('You must be logged in')

    },
    async removeTea(parent, { id }, context) {
        if (context.user) {
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { teas: { _id: id } }},
                    { new: true}
                )

                return updatedUser

            } catch (e) {
                console.error(e)
                throw new AuthenticationError('Tea was unable to be removed')
            }
        }

        throw new AuthenticationError('You must be logged in')

    }
}

module.exports = teaController