const fs = require('fs')

const { User, Recipe } = require('../models')

const { AuthenticationError } = require('apollo-server-express')

const recipeController = {
    async getRecipes(parent, params, context) {
        if (context.user) {
            try {
                const recipes = await Recipe.find().sort({ createdAt: -1})
                return recipes
            } catch (e) {
                console.error(e)
                throw new AuthenticationError('Unable to return recipes')
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

                return newRecipe

            } catch (e) {
                console.error(e)
                throw new AuthenticationError('Recipe was unable to be saved')
            }
        }

        
    },
    async removeRecipe(parent, { id }, context) {
        if (context.user) {
            try {

                const user = await User.findById(context.user._id)
                if (!user.recipes.some(recipeID => recipeID.toString() === id)) {
                    throw new AuthenticationError('You are not autheticated to delete this recipe')
                }

                const deletedRecipe = await Recipe.findByIdAndDelete(id)

                const updatedUser = await User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { recipes: deletedRecipe._id }},
                    { new: true}
                )

                if (deletedRecipe.picture === 'default.png') {
                    return deletedRecipe
                }

                const path = `./images/images/${deletedRecipe.picture}`

                fs.unlink(path, (err) => {
                    if (err) {
                      console.error(err)
                      return
                    }
                })

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