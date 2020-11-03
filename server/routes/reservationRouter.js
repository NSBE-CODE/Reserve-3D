const express = require('express');
const ReservationRouter = express.Router();
const ReservationModel = require('../models/Reservation.js');


/* How to test:
        -in the terminal, cd into the server folder
        -run "node server.js" to start the server, and connect to mongoose
        -follow instructions below to test each function on Postman */


// (should create 1 new reservation)
// Select POST and type localhost:4000/api/Reservation
// Enter the entry in json format following the Reservation Schema before hitting send
ReservationRouter.post('/', ReservationModel.post);

// (should delete all reservations)
// Select DELETE and type localhost:4000/api/Reservation
ReservationRouter.delete('/', ReservationModel.delete);

// (should retrieve all reservations of a certain reserver_id value)
// Select GET and type localhost:4000/api/Reservation/_id
// Enter an entry in json format following the Reservation Schema before hitting send
ReservationRouter.get('/_id', ReservationModel.getById);

// (should retrieve all reservations of a certain date value)
// Select GET, type localhost:4000/api/Reservation/date
// Enter an entry in json format following the Reservation Schema before hitting send
ReservationRouter.get('/date', ReservationModel.getByDate);

// (should retrieve all reservations)
// Select GET and type localhost:4000/api/Reservation/all
ReservationRouter.get('/all', ReservationModel.getAll);


module.exports = ReservationRouter;