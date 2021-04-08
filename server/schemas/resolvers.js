const {
    GraphQLUpload, // The GraphQL "Upload" Scalar
} = require('graphql-upload');

const { loadImage, findImage } = require('../images/controller/image-controller')

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        findImage: findImage
    },
    Mutation: {
        loadImage: loadImage
    }
}

module.exports = resolvers