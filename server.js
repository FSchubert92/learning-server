const express = require('express')
const uid = require('uid')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/learning-db', {
  useNewUrlParser: true,
})
app.use(cors())
app.use(express.json())

app.use('/cards', require('./routes/cards'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Server ready on port' + port)
})
