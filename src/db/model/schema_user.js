const mongoose = require('mongoose')
const MSchema = mongoose.Schema

const userSchema = new MSchema({
  username: String,
  password: String,
  firstname_th: String,
  lastname_th: String,
  role: String
})

module.exports = mongoose.model('users', userSchema)