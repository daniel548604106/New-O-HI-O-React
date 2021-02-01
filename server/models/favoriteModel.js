const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
  favoriteProducts:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  favoriteShops:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop'
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