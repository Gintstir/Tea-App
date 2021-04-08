const {
    GraphQLUpload, // The GraphQL "Upload" Scalar
} = require('graphql-upload');

const { createTea, createRecipe, createExtra } = require('../controllers/tea-controller');
const { createUser, loginUser, getUser } = require('../controllers/user-controller')

const { loadImage, findImage } = require('../images/controller/image-controller')

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        findImage: findImage,

        me: getUser,
        user: getUser
    },
    Mutation: {
        addUser: createUser,
        login: loginUser,

        addTea: createTea,
        addExtra: createExtra,
        addRecipe: createRecipe,
        
        loadImage: loadImage
    }
}

module.exports = resolvers