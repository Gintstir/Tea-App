// import the gql tagged template function
const { gql } = require('apollo-server-express')

const typeDefs = gql`
    scalar Upload

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
        tea: Tea!
        extra: [String]
        temperature: Int!
        steepTime: Int!
        picture: String!
        note: String!
        createdAt: String
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
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        userRecipes(username: String!): [Recipe]
        typeRecipes(type: String): [Recipe]
        recipe(_id: ID!): Recipe
        recipes: [Recipe]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addTea(type: String!, name: String!, brand: String!): User
        addExtra(type: String): User
        addRecipe(type: String!, name: String!, brand: String!, extra: [String], temperature: Int!, steepTime: Int!, picture: String!, note: String!): Recipe

        removeExtra(type: String!): User
        removeTea(id: ID!): User
        removeRecipe(id: ID!): Recipe

        loadImage(image: String!, imageName: String!, mimeType: String!): Boolean!
    }

    
`

module.exports = typeDefs