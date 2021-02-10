require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
require('./src/db/connect_mongodb')
const app = express()
const schema = require('./src/service/schema/schema')
app.use(cors())

app.use('/graphql' , graphqlHTTP({
  graphiql: true,
  schema: schema
}))

app.listen(port, () => {
  console.log('Start Server in Port', port)
})