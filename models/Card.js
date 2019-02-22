const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  title: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },

  content: mongoose.SchemaTypes.String,
  tags: mongoose.SchemaTypes.Object,
})

module.exports = mongoose.model('Card', CardSchema)
