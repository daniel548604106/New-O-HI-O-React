const User = require('../models/userModel');
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

module.exports = { getUserData ,getUserAvatar};
