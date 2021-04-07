const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type File {
        files: [String]
    }

    type Resp {
        respond: String!
    }

    type Query {
        findImage: String
    }

    type Mutation {
        loadImage(image: Upload!): Boolean!
    }
`

module.exports = typeDefs