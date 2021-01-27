const Banner = require('../models/bannerModel')


const getBanners = async(req,res) =>{
  try{
    const banners = await Banner.find()
    res.status(200).json({
      banners
    })

    console.log('success')
    
  }catch(error){
    console.log(error)
  }

}


module.exports = {getBanners}