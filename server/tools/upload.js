
const multer = require('multer')
// const ImageKit = require("imagekit");

const multerStorage = multer.diskStorage({
  destination: (req,file, cb) => {
    cb(null, 'server/uploads/img/users')
  },
  filename: (req,file,cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, `user-${req.user._id}-${Date.now()}.${ext}`)
  }
})

// Only Allow Image file to be uploaded
const multerFilter = (req,file,cb) => {
  if(file.mimetype.startsWith('image')){
    cb(null, true)
  }else{
    cb('Not an image, please upload only images', false)
  }
} 

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fieldSize: 25 * 1024 * 1024 }
})

const uploadUserPhoto = upload.single('avatar')

// const imagekit = new ImageKit({
//   publicKey : 'public_VxxKPNOCjc7ub62pJabHuLA44WE=',
//   privateKey : 'private_TuXfAhCaGaNLrOgkonL+NslUVLY=',
//   urlEndpoint : `https://ik.imagekit.io/4liibdxmxfn`
// });

// const uploadUserAvatar = async (req,res, next) => {
//   try{
//     if(!req.body.avatar) return next()
//      const uploaded = await imagekit.upload({
//       file : req.body.avatar, //required
//       fileName : `user-${req.params._id}-${Date.now()}`,   //required
//       folder: `/images/users/`
//     })
//      req.body.avatar = uploaded.url
//       console.log('name',uploaded.name, 'filedId', uploaded.fileId)
//       next()
//   }catch(error){
//     console.log(error)
//   }
// }




module.exports = {  upload, uploadUserPhoto }