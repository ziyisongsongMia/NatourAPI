const express = require('express');
const router = express.Router(); //declare the variable
const tourController = require('./../controllers/tourController.js'); //weishashi ./../?
//const {getAllTours,createTour,getTour,updateTour,deleteTour} = require('./../controllers/tourController.js'); and don't need tourController.

//router.param('id', tourController.checkID);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(/* tourController.checkBody,  */tourController.createTour); //They are simply middleware functions that are only executed for certain routes.
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour); //They are simply middleware functions that are only executed for certain routes.

module.exports = router;
