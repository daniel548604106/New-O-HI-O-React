const Product = require('../models/productModel');
const Shop = require('../models/shopModel')
const addNewProduct = async(req,res,next) =>{
  try{ 
    const { ...all } = req.body
    const id = req.user._id
    console.log(all,id)
    const shop = await Shop.findOne({ user: id})
    const shopId = shop._id
    const newProduct = await Product.create({
      ...all,
      publishedBy: shopId
    })
    console.log(newProduct)
    res.status(200).json({
      newProduct
    })

  }catch(error){
    console.log(error)
  }
}
const getDiscountedProducts = async(req,res,next) =>{
  try{
    console.log('discount')
    const products = await Product.find({"discountPrice": { $ne: null }})
    // console.log('discount',products)
    res.status(200).json({
      products
    })
  }catch(error){
    console.log(error)
  }
}

const getSearchedProducts = async(req,res ) =>{
  try{
    console.log("hiihi")
    res.status(200).message('Success')
  }catch(error){
    console.log(error)
  }
}
const getAllProducts = async (req, res, next) => {
  try {
    const { order, page , sort } = req.query
    let options;
    if(sort === 'price'){
      options = { 'fullPrice': order}
    }
    const currentPage = page || 1
    const productsQuantity = await Product.find().countDocuments()
    const products = await Product.find().limit(20).skip((currentPage -1) * 20).sort(options).populate('publishedBy');
    res.status(200).json({
      products,
      currentPage,
      totalPage : Math.ceil(productsQuantity/ 20)
    });
  } catch (error) {
    console.log(error);
  }
};
const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const product = await Product.findById(id).populate('publishedBy').populate('reviews');
    console.log(product);
    res.status(200).json({
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

const getCollectionProducts = async (req, res, next) => {
  try {
    const { collection } = req.params;
    const products = await Product.find({ category: collection });
    res.status(200).json({
      products,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addNewProduct, getAllProducts, getSearchedProducts,getProduct, getCollectionProducts,getDiscountedProducts };
