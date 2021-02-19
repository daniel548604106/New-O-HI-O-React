const Order = require('../models/orderModel')

const postNewOrder = async(req,res) =>{
  try{
    const {_id} = req.user
    const { ...data } = req.body
    console.log('new order',req.body)
    const newOrder = await Order.create({...data, orderer: _id})
    console.log(newOrder)
    res.status(200).json({
      newOrder
    })
  }catch(error){
    res.status(400).json({
      error
    })
    console.log(error)
  }
}
// const getOrders = async(req,res) =>{
//   try{

//   }
// }


module.exports= { postNewOrder}