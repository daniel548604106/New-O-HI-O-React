const Banner = require('../models/bannerModel')


const getBanners = async(req,res) =>{
  try{
    const banners = await Banner.find()
    res.status(200).json({
      banners
    })
    
  }catch(error){
    console.log(error)
  }

}


module.exports = {getBanners}