const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    data: { users },
  });

  /* res
    .status(500)
    .json({ success: 'error', message: 'this handler is not yet finished!' }); */
});

exports.getUser = (req, res) => {
  res
    .status(500)
    .json({ success: 'error', message: 'this handler is not yet finished!' });
};

exports.createUser = (req, res) => {
  res
    .status(500)
    .json({ success: 'error', message: 'this handler is not yet finished!' });
};

exports.updateUser = (req, res) => {
  res
    .status(500)
    .json({ success: 'error', message: 'this handler is not yet finished!' });
};

exports.deleteUser = (req, res) => {
  res
    .status(500)
    .json({ success: 'error', message: 'this handler is not yet finished!' });
};
