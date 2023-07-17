//const fs = require('fs');
const Tour = require('./../models/tourModel');

/* const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
); //为什么是../？ */

/* exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }
  next();
}; */

/* exports.checkBody = (req, res, next) => {
  if (!req.body.price || !req.body.name) {
    return res
      .status(400)
      .json({ status: 'fail', message: 'Missing name or price' });
  }
  next();
}; to show how middleware works */

exports.getAllTours = async (req, res) => {
  //console.log(req.requestTime);
  try {
    const tours = await Tour.find(); //return all documents in the collection tour as an array
    //Tour.findOne({_id:req.params.id})
    res.status(200).json({
      status: 'success',
      results: tours.length,
      // requestAt: req.requestTime, //"requestAt": "2023-05-18T02:58:01.618Z",
      data: { tours },
    });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: { tour },
    });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err });
  }
  /*   console.log(req.params);
  const id = req.params.id * 1; */

  /*   if (id > tours.length - 1) {
    res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  }

  const tour = tours.find((el) => el.id === id); */
  /*   res.status(200).json({
    status: 'success',
    //data: { tour },
  }) */
};

exports.createTour = async (req, res) => {
  //next is the old deleted version
  //console.log('req.body', req.body); //postman body is a json file, here req.body is an object, because of the app.use(express.json())
  // const newId = tours[tours.length - 1].id + 1;
  //let newTour = Object.assign({ id: newId }, req.body);
  // tours.push(newTour);
  //   fs.writeFile(
  //  `${__dirname}/dev-data/data/tours-simple.json`,
  //  JSON.stringify(tours),
  //  (err) => {
  //   res.status(201).json({ status: 'success', data: { tour: newTour } });
  //  }
  //);
  try {
    //the following new version is equivalent to const newTour = new Tour({}),newTour.save()
    const newTour = await Tour.create(req.body); //we can use the tour model directly and call the create method on it.Then into that function we pass the data that we want to store in the database as a newTour. store the promise into the newTour with id and everything
    //if it has validation error, will get a reject, we can catch error later
    res.status(201).json({
      status: 'success',
      data: newTour,
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err });
  }
};

exports.updateTour = async (req, res) => {
  /*  if (req.params.id * 1 > tours.length - 1) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });  } */

  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // this way, the new updated document is the one that will be returned.
      runValidators: true,
    });
    res.status(200).json({ success: 'success', data: { tour } });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err });
  }
};

exports.deleteTour = async (req, res) => {
  /*   if (req.params.id * 1 > tours.length - 1) {
    return res.status(404).json({ status: 'fail', message: 'Invalid ID' });
  } */
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err });
  }
};
