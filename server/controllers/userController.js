const User = require('../models/userModel');
const getUsers = async(req, res ) =>{
  try{
    const users = await User.find()
    res.status(200).json({
      users
    })
  }catch(error){
    console.log(error)
  }
}
const getUserData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select('-password');
    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserAvatar = async(req,res) =>{
  try{
    const {_id} = req.params
    const user = await User.findById(_id)
    console.log(user)
    res.status(200).json({
      picture: user.picture
    })
  }catch(error){
    console.log(error)
  }
}

module.exports = { getUserData ,getUserAvatar,getUsers};
