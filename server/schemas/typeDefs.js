// import the gql tagged template function
const { gql } = require('apollo-server-express')

const typeDefs = gql`
    
    type File {
        files: [String]
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        teas: [Tea]
        recipes: [Recipe]
        extras: [String]
        avatar: String
    }
    type Tea {
        _id: ID!
        type: String
        name: String
        brand: String
    }
    type Extra {
        _id: ID
        type: String
    }
    type Recipe {
        _id: ID!
        tea: [Tea]
        extra: [String]
        temperature: String
        steepTime: Int
        picture: String
        note: String
        createdAt: String
    }

    scalar Upload

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        recipes(username: String!): User
        recipes(type: String): teaSchema
        recipe(_id: ID!): Recipe


        findImage: String
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addTea(type: String!, name: String!, brand: String!): User
        addExtra(type: String): User
        addRecipe(temperature: String!, steepTime: Int!, picture: String, note: String!): Recipe


        loadImage(image: Upload!): Boolean!
    }

    
`

module.exports = typeDefs