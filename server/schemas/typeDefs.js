const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        items: [Item]!
    }

    type Item{
        _id: ID
        itemTitle: String
        itemText: String
        itemAuthor: String
        createdAt: String
        responses: [Response]!
    }

    type Response {
        _id: ID
        responseText: String
        responseAuthor: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        items(username: String): [Item]
        item(itemId: ID!): Item
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String, password: String!): Auth
        addItem(itemTitle: String!, itemText: String!, itemAuthor: String!): Item
        addResponse(
            itemId: ID!,
            responseText: String!,
            responseAuthor: String!
        ): Item
        removeItem(itemId: ID!): Item
        removeResponse(
            itemId: ID!, 
            responseId: ID!
        ): Item
    }
`;

module.exports = typeDefs;