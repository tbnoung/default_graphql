const mongoose = require('mongoose')

var url = "mongodb://172.44.12.139:27017/tbnoung";
// var url = "mongodb://localhost:27017/eprocument"

mongoose.connect(url, {useNewUrlParser: true})
mongoose.connection.once('open', () => {
  console.log('Yes! We are connected to mongodb')
})