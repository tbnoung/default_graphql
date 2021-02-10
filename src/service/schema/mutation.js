const graphiql = require('graphql')
const {
  GraphQLObjectType
} = graphiql

const Mutations = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Description Mutation',
  fields: {
  }
})

module.exports = Mutations