const Chat = require('../models/chatModel')

const patchChat =  async(req,res) =>{
  try{
    const {id} = req.body
    const user = req.user
    console.log(id, user._id)
    const existingChat = await Chat.findOne({participants: id && user._id})
    console.log(existingChat)
    if(!existingChat){
      const newChat = await Chat.create({ participants: [id, user._id]})
      console.log(newChat)
      res.status(203)
      return
    }
    res.status(203)
  }catch(error){
    console.log(error)
  }
}

const addChatContent = async(req,res) =>{
  try{
    return console.log(req.body)
    const chat = await Chat.findById()

  }catch(error){
    console.log(error)
  }
}

const getAllChats = async(req,res) =>{
  try{
    const { _id }  = req.user
    const chats = await Chat.find({ participants: _id }).populate('participants')
    console.log(chats)
    res.status(200).json({
      chats
    })
    console.log('getChats')
  }catch(error){
    console.log(error)
  }
}

const getChat = async(req,res) =>{
  try{
    console.log('getChat')
  }catch(error){
    console.log(error)
  }
}

module.exports = { patchChat,getAllChats,getChat, addChatContent }