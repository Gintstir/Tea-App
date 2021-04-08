const { User, Recipe } = require('../models')

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
    async createExtra(parent, extra, context) {
        if (context.user) {
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $addToSet: { extras: extra }},
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
    async createRecipe(parent, recipe, context) {
        if (context.user) {
            try {
                const newRecipe = await Recipe.create(recipe)

                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $addToSet: { recipe: newRecipe._id }},
                    { new: true}
                )

                return newRecipe

            } catch (e) {
                console.error(e)
                throw new AuthenticationError('Recipe was unable to be saved')
            }
        }

        throw new AuthenticationError('You must be logged in')
    }
}

module.exports = teaController