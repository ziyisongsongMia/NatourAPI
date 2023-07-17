const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('./../utils/appError');
const bcrypt = require('bcryptjs');

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  //const newUser = await User.create(req.body);   the problem here is that like this, anyone can specify the role as an admin right, this is a serious security flaw, so delete and replace it with the following code //User.save()
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  }); //we only need the info we need

  const token = signToken(newUser._id);
  //payload is basically an object for all the data that we're going to store inside of the token,
  //看github jsonwebtoken .sign()，180天后jwt——secret失效
  res.status(201).json({
    status: 'success',
    token,
    data: { user: newUser },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  //1. if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  } //the next middleware: we want to make sure that this login function here finishes right away

  //2. check if user exists && password is correct
  const user = await User.findOne({ email }).select('+password'); // User.findOne({ email }) doesn't contain password
  // we used select before to basically explicitly select a couple of fields from the database, only the ones that we needed
  console.log('user in line 38', user);
  /*  user: {
        "_id": "6495162c00a4432fb8f791db",
        "name": "jonas4",
        "email": "hello4@gmail.io",
        "password": "$2a$12$jNYhtuZFRRD4.mR4gvf4yOsenZqiKyY2Qyo65hTC8IC8HZdWnTAzO",
        "__v": 0
    } */
  /* const correct = await user.correctPassword(password, user.password); //true or false
  if (!user || !correct) {
    return next(new AppError('Incorrect email or password', 401));
  } */
  //check if user exists and password is correct
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  } //if user exists, then run the await part, or else will be error

  //3. if everything is okay, send jwt to client
  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
    /* user, */
  });
});
