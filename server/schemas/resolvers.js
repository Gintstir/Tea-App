const { loadImage } = require('../images/controller/image-controller')

const resolvers = {
    Mutation: {
        loadImage: loadImage
    }
}

module.exports = resolvers