const {
    GraphQLUpload, // The GraphQL "Upload" Scalar
} = require('graphql-upload');

const { createTea, removeTea } = require('../controllers/tea-controller');
const { createExtra, removeExtra } = require('../controllers/extra-controller');
const { getRecipes, createRecipe, removeRecipe } = require('../controllers/recipe-controller');

const { createUser, loginUser, getUser } = require('../controllers/user-controller')

const { loadImage } = require('../images/controller/image-controller')

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        me: getUser,
        user: getUser,
        recipes: getRecipes
    },
    Mutation: {
        addUser: createUser,
        login: loginUser,

        addTea: createTea,
        addExtra: createExtra,
        addRecipe: createRecipe,

        removeExtra: removeExtra,
        removeTea: removeTea,
        removeRecipe: removeRecipe,
        
        loadImage: loadImage
    }
}

module.exports = resolvers