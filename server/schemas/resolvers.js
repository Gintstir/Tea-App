const {
    GraphQLUpload, // The GraphQL "Upload" Scalar
} = require('graphql-upload');

const { createTea, createRecipe, createExtra } = require('../controllers/tea-controller');
const { createUser, loginUser, getUser } = require('../controllers/user-controller')

const { loadImage } = require('../images/controller/image-controller')

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
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