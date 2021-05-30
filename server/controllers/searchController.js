const Product = require('../models/productModel')

const getSearchedProducts = async(req,res) =>{
  try{
    const { text } = req.query
    console.log(text)
    // FUll TEXT SEARCH
    // const result = await Product.find({ $text: {$search:  `/${text}/i`}}) 
    // Partial Text Search
    const result = await Product.find( { name : {$regex: new RegExp(text)}})
    console.log('searchResult',result)
    res.status(200).json({
      result
    })
  }catch(error){
    console.log(error)
  }
}


module.exports = {getSearchedProducts}