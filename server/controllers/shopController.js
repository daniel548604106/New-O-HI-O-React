const Shop = require('../models/shopModel')


const addNewShop = async(req,res) =>{
  try{
    const {_id} = req.user
    const { name, website} = req.body
    const user = await Shop.findOne({user: _id})
    if(!user){
      const shop = await Shop.create({name, website, user: _id})
      console.log(shop)
      return res.status(200).json({
        shop
      })
      
    }
    res.status(500).json({message: 'You have already opened a shop, please use another account if you want to open a new shop'})
  }catch(error){
    console.log(error)
  }
}

const getHotShop = async(req,res) =>{
  try{
    const shop = await Shop.find().limit(10)
    console.log('hot shop')
    res.status(200).json({
      shop
    })
  }catch(error){
    console.log(error)
  }
}


module.exports = { addNewShop,getHotShop }