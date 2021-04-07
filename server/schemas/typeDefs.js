const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type File {
        files: [String]
    }

    type Mutation {
        loadImage(file: Upload!): Boolean
    }
`

module.exports = typeDefs