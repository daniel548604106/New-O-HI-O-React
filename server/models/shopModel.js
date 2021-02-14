const mongoose = require('mongoose')


const shopSchema = new mongoose.Schema({
  banner:{
    type: String,
  },
  logo:{
    type: String
  },
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
  pinnedProducts:[
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Product'
    }
  ],
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: [true,'You have already opened a shop']
  },
},{
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})


shopSchema.virtual('products', {
  ref: 'Product',
  localField: '_id',
  foreignField: 'publishedBy'
})






const Shop = mongoose.model('Shop',shopSchema)

module.exports = Shop