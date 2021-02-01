const Review = require('../models/reviewModel')

const postReview = async(req,res) =>{
  try{
    const user = req.user
    const { comment , score ,productId} = req.body
    const review = await Review.create({
      comment,score,user: user._id,product: productId
    })
    res.status(200).json({
      message: "Thank you for your feedback!"
    })
    console.log('postREview')
  }catch(error){
    console.log(error)
  }
}

const getReviews = async(req,res) =>{
  try{
    const productId = req.params.id
    const reviews = await Review.find({
     product: productId
   }).populate('product').populate('user')
   console.log(reviews)
   res.status(200).json({
    reviews
   })
  console.log('getReviews')
  }catch(error){
    console.log(error)
  }
}



module.exports = {postReview,getReviews}