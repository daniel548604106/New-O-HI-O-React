const jwt = require('jsonwebtoken')
const jwtDecode = require('jwt-decode')
const User = require('../models/userModel')
// const Account = require('../models/accountModel')
const protect = async (req,res,next) =>{
  try{
    console.log(req.headers)
    console.log('protected',req.headers.authorization)
    // console.log(req.body, req.headers)
    let token  = ''
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
      token = req.headers.authorization.split(' ')[1]
      console.log(token)
       // Check Social Account
      //  const email = (jwtDecode(token).email)
      //  console.log('email',email)
      //  const account = await Account.findOne({ email})
      //  console.log(account)
      //  if(account){
      //    console.log(account)
      //    req.user = account
      //    return next()
      //  }
      //JWT will return jwt malformed If Token is null/Invalid-Signature that is being passed to jwt.verifty function
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      // find that user
      const user = await User.findById(decoded.id) 
      console.log(user)
      if(user){
        req.user = user
        next() //middleware passed
      }
    }  
  }catch(error){
    res.status(403).json({
      message: 'token invalid'
    })
  }
  // check if token exists in headers
}


const admin = (req,res, next) =>{
  if(!req.user.isAdmin){
    return res.status(403).json({
      status: 'fail',
      message: "User is not authorized as an admin"
    })
  }
  next()
}

const seller = (req,res, next) =>{
  if(!req.user.roles.includes('seller')){
    return res.status(403).json({
      status: 'fail',
      message: "User is not a valid seller"
    })
  }
  next()
}



module.exports = { protect, admin ,seller}