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

module.exports = { getUserData };
