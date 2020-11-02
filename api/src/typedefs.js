const { gql } = require("apollo-server");

module.exports = gql` 
  type User {
    id: ID!
    name: String!
    email: String!
    stack: String
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;