const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes');

//1) middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); ////a logger in terminal for HTTP methods; dev is predefined format
}

app.use(express.json()); //useful for fetching req.body, We used Express dot JSON to get access to the request body on the request object.
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
}); //middleware here applies to each and every single request,  And that's because we didn't specify any route

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString(); //toISOString() convert it into a nice, readable string for us
  next();
}); //middleware here applies to each and every single request, And that's because we didn't specify any route

//2)route handlers

//3)routes
//app.get('/api/v1/tours', getAllTours);
//app.get('/api/v1/tours/:id', getTour);
//app.post('/api/v1/tours', createTour);
//app.patch('/api/v1/tours/:id', updateTour);
//app.delete('/api/v1/tours/:id', deleteTour);
app.use('/api/v1/users', userRouter); // we mount our routers here,  basically creating one small application for each of them and then putting everything together in one main app file,
app.use('/api/v1/tours', tourRouter); //we have an incoming request now for /api/v1/tours, So the request goes into the middleware stack tourRouter (which is like a mini app or sub app later) and when it hits the code app.route('/'), it will match this URL here. So it will match this route and therefore our two router middleware functions get() and post() will run.
//this is called mounting the router, so mounting a new router on a route

//4) start the server
module.exports = app;
