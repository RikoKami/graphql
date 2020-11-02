const { ApolloServer } = require("apollo-server");
const resolvers = require('./resolvers');
const typeDefs = require('./typedefs');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/graphqlnode", {
  useNewUrlParser: true
})

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`O serve ta rodando em: ${url}`));
