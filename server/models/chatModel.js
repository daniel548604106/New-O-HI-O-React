const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
  conversations:[
    {
      type: Array,
    }
  ],
  participants: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User'
    }
  ]
},
{
  timestamps: true
})

const Chat = mongoose.model('Chat', chatSchema)

module.exports = Chat