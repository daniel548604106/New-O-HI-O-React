const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
  favoriteItems:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},{
  timestamps: true
})

const Favorite = mongoose.model('Favorite',favoriteSchema )

module.exports = Favorite