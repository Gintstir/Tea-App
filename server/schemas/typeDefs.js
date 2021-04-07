const { gql } = require('apollo-server-express')

const typeDefs = gql`
    
    type File {
        files: [String]
    }

    scalar Upload

    type Query {
        findImage: String
    }

    type Mutation {
        loadImage(image: Upload!): Boolean!
    }

    type: User {
        _id: ID
        username: String
        email: String
        teas: [teaSchema]
    }
    type: Tea {
        _id: ID
        type: String
        name: String
        brand: String
    }
    type Extra {---------------------working here!
        _id: ID

    }
`

module.exports = typeDefs