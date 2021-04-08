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
    async createRecipe(parent, { type, name, brand, ...recipe}, context) {
        if (context.user) {
            try {
                recipe.tea = {
                    type,
                    name,
                    brand
                }
                const newRecipe = await Recipe.create(recipe)

                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $addToSet: { recipes: newRecipe._id }},
                    { new: true}
                )

                console.log(updatedUser)
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