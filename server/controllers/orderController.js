const Order = require('../models/orderModel')

const postNewOrder = async(req,res) =>{
  try{
    const {_id} = req.user
    const { checkoutDetail,checkoutList,...rest } = req.body
    console.log('new order',req.body)
    const newOrder = await Order.create({...rest, ...checkoutDetail, shoppingList: [] , orderer: _id})
    checkoutList.forEach((list,idx) => newOrder.shoppingList.push({
      quantity: checkoutList[idx].quantity,
      product: checkoutList[idx]._id
    }))
    newOrder.save()
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
const getAllOrders = async(req,res) =>{
  try{
    console.log('orders 1')
    const { _id} = req.user
    console.log(_id)
    const orders = await Order.find({orderer: _id}).populate('shoppingList.product')
    res.status(200).json({
      orders
    })

  }catch(error){
    console.log(error)
  }
}


module.exports= { postNewOrder,getAllOrders}