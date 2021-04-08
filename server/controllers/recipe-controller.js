const { User, Recipe } = require('../models')

const { AuthenticationError } = require('apollo-server-express')

const recipeController = {
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

                return newRecipe

            } catch (e) {
                console.error(e)
                throw new AuthenticationError('Recipe was unable to be saved')
            }
        }

        throw new AuthenticationError('You must be logged in')
    },
    async removeRecipe(parent, { id }, context) {
        if (context.user) {
            try {
                const deletedRecipe = await Recipe.findByIdAndDelete(id)

                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { recipes: deletedRecipe._id }},
                    { new: true}
                )

                return deletedRecipe

            } catch (e) {
                console.error(e)
                throw new AuthenticationError('Recipe was unable to be removed')
            }
        }

        throw new AuthenticationError('You must be logged in')
    }
}

module.exports = recipeController