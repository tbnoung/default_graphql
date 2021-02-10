const graphql = require('graphql')
const RootQuery = require('./query')
const  Mutations  = require('./mutation')
const { GraphQLSchema } = graphql

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
})