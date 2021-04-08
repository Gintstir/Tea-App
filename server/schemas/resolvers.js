const {
    GraphQLUpload, // The GraphQL "Upload" Scalar
} = require('graphql-upload');
const { AuthenticationError } = require('apollo-server-express');
const { User, Tea, Recipe, } = require('../models');
const { signToken } = require('../utils/auth');

const { loadImage, findImage } = require('../images/controller/image-controller')

const resolvers = {
    Upload: GraphQLUpload,
    Query: {
        findImage: findImage,

        user: async (parent, { username }, context) => {
           if(context.user) {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('recipes')
           }

           throw new AuthenticationError('Not logged in!');
            
        },
        users: async () => {
            return User.find()
            .select('-__v -password')


        }
    },
    Mutation: {
        loadImage: loadImage,
        
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        }
    }
}

module.exports = resolvers