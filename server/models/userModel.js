const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
    },
    biography: {
      type: String,
      default: '',
    },
    birthday:{
      type: String
    },
    picture: {
      type: String,
      default: '',
    },
    gender: {
      type: String,
      default: '',
    },
    website: {
      type: String,
      default: '',
    },
    facebook: {
      id: String,
      token: String,
      email: String,
      name: String,
      picture: String,
    },
    google: {
      id: String,
      token: String,
      email: String,
      name: String,
      picture: String,
    },
    line: {
      id: String,
      token: String,
      email: String,
      name: String,
      picture: String,
    },
    roles:{
      type:[{
        type: String,
        enum: ['user', 'seller', 'admin']
      }],
      default: ['user']
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false,
  },
);

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
// userSchema.pre('save', async function (next) {
//   // 如果今天使用者更改其他個人資訊但沒有做密碼更改，就直接 save
//   // User.create 就是 .save
//   if (!this.isModified('password')) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

//virtual populate
userSchema.virtual('journeys', {
  ref: 'Journey',
  foreignField: 'createdBy',
  localField: '_id',
});

const User = mongoose.model('User', userSchema);

module.exports = User;
