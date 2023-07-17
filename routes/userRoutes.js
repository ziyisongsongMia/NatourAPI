const express = require('express');
const router = express.Router(); //declare the variable
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
//E:\full stack\nodejs Udemy\complete-node-bootcamp-master\4-natours\starter - practice 57-62\routes\userRoutes.js:4 router.route('/').get(getAllUsers).post(createUser); ReferenceError: getAllUsers is not defined      ^

//app.use((req, res, next) => {
//  console.log('Hello from the middleware');
// next();
//});
// this route handler here, app.route('/api/v1/tours'), it comes before this middleware function userRouter.route('/:id'). And this route handler, which in this case, is get all tours, actually ends the request response cycle, by sending a result with res dot json, we actually end the request response cycle.
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
