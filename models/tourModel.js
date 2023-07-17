const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name!'],
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must hava a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a group size'],
  },
  ratingsAverage: { type: Number, default: 4.5 },
  ratingsQuantity: { type: Number, default: 0 }, // when we create a new tour, we will never specify the ratingsAverage, neither the ratingsQuantity, because that will later on be calculated from the real reviews
  price: { type: Number, required: [true, 'A tour must have a price!'] },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description!'],
  }, //I will not actually make it required. and that's simply because it's not on the front page of our website. so basically it's not on the overview.
  //trim:  trim will remove all the white space in the beginning and in the end of the string.
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have an image cover'],
  },
  images: [String], //an array in which we have a number of strings.
  createdAt: { type: Date, default: Date.now() },
  startDates: [Date], //For example, we can have a tour starting in December this year, and then in February, the next year,
});
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
