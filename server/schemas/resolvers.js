const { loadImage, findImage } = require('../images/controller/image-controller')

const resolvers = {
    Query: {
        findImage: findImage
    },
    Mutation: {
        loadImage: loadImage
    }
}

module.exports = resolvers