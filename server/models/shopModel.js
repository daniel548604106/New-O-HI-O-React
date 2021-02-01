const mongoose = require('mongoose')


const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us the name of the shop'],
    unique: true
  },
  account:{
    type:String,
    required: [true, 'Please give your shop an account name'],
    unique:true
  },
  website:{
    type: String
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: [true,'You have already opened a shop']
  },
  products:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
},{
  timestamps: true
})







const Shop = mongoose.model('Shop',shopSchema)

module.exports = Shop