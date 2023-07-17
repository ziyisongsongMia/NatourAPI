const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, requied: [true, 'Please tell us your name'] },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String, //只有一项，直接String，不是img，不用{type:String}
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false, //后续get all users or login to get a user时不会leak password data out, important
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    //custom validator: need a callback function which will be called when creating a new document, can't use arrow function since we need this keyword
    //This only works on CREATE and SAVE!!!  whenever we want to update a user, we will always have to use SAVE as well and not, for example, findOneAndUpdate like we did with our tours.  keep in mind that this will only work when we create a new object, so on dot create, or on save.
    validate: {
      validator: function (el) {
        return el === this.password; //abc ===abc returns true, abc=edf returns false
      },
      message: 'passwords are not the same!',
    },
  },
});

//pre-middleware
userSchema.pre('save', async function (next) {
  //only run this function if the password is modifiednm
  if (!this.isModified('password')) {
    return next(); //exit the function and call the next middleware
  } //this refers to the current document, and so in this case, the current user, we have a method on all documents which we can use if a certain field has been modified. 'password' is the name of the field
  this.password = await bcrypt.hash(this.password, 12); //wait for the promise returned//12 is cost parameter, a measure of how CPU intensive this operation will be
  //next is to delete the passwordConfirm field
  this.passwordConfirm = undefined; //don't need Confirm,  we really do not want to persist it to the database.  we actually set passwordConfirm to a required, but that simply means that it's a required input, not that it's required to actually be persisted to the database
  next();
}); // encryption is gonna be happened between the moment that we receive that data and the moment where it's actually persisted to the database,So that's where the pre-save middleware runs.

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  //this.password is not available, this. means the document
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema); //capital letter
module.exports = User;
