const graphiql = require('graphql')
const {
  GraphQLObjectType
} = graphiql
const RootQuery = new GraphQLObjectType ({
  name: 'RootQueryType',
  description: 'Description RootQueryType',
  fields: {
  }
})

module.exports = RootQuery