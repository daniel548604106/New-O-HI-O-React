const Product = require('../models/productModel')

const getSearchedProducts = async(req,res) =>{
  try{
    const { text } = req.query
    const result = await Product.find({$text: {$search: text}})
    res.status(200).json({
      result
    })
  }catch(error){
    console.log(error)
  }
}


module.exports = {getSearchedProducts}