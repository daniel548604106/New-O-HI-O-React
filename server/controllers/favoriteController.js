const Favorite = require('../models/favoriteModel')

const addFavProduct = async(req,res) =>{
  try{
    const {productId } = req.body
    console.log('req.body',req.body)
    const { _id } = req.user
    const user = await Favorite.findOne({user: _id})
    if(!user){
      const favorite = await Favorite.create({
        favoriteItems: productId,
        user: _id
      })
      console.log(favorite)
      return res.status(200).json({
        favorite
      })
    }
    if(user.favoriteItems.indexOf(productId) === -1){
      user.favoriteItems.push(productId)
      user.save()
    }else{
      const index = user.favoriteItems.indexOf(productId)
      user.favoriteItems.splice(index,1)
      user.save()
    }
    res.status(200).json({
      user
    })

    console.log(user)
    console.log('add Products ')
  }catch(error){
    console.log(error)
  }
}

const addFavShop = async(req,res) =>{
  try{
    console.log('add Shop')
  }catch(error){
    console.log(error)
  }
}

const getFavProducts = async(req,res) =>{
  try{
    console.log('get Products')
    const { _id } = req.user
    const userFavList = await Favorite.findOne({user: _id}).populate('favoriteItems')
    res.status(200).json({
      userFavList
    })
    
  }catch(error){
    console.log(error)
  }
}

const getFavShops= async(req,res) =>{
  try{
    console.log('get Shops')
  }catch(error){
    console.log(error)
  }
}



module.exports = {addFavShop,addFavProduct,getFavProducts,getFavShops}