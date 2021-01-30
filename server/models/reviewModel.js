const mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({
  score: {
    type: Number,
    default: 1
  },
  comment:[{
    text: {
      type: String
    },
    images:[{
      type: String
    }]
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  product:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }
},{
  timestamps: true
})


const Review= mongoose.model('Review', reviewSchema)

module.exports = Review