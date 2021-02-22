const axios = require('axios');
const qs = require('query-string');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const generateToken =require('../tools/generateToken')
const authSignup = async (req, res, next) => {
  try {
    const { account , email, password} = req.body
    // check if email exists
    const userExists = await User.findOne({email})
    if(userExists){
      return next(new Error('This account already exists!'))
    }
    const newUser = await User.create({email,password,account})
    console.log(newUser)
    res.status(200).json({
      status: 'success',
      id: newUser._id,
      email: newUser.email,
      account: newUser.account,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser._id)
    })
  }catch(error){
    console.log(error)
  }
};

module.exports = { authSignup };
