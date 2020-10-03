const ReservationController = require('../controllers/ReservationController.js');
const express = require('express');
const ReservationRouter = express.Router();
const reservationModel = require('../models/Reservation.js');

ReservationRouter.get('/name', reservationModel.getByName);

ReservationRouter.get('/all', ReservationController.getAll);
//ReservationRouter.get('/', reservationModel.getAll);

ReservationRouter.post('/', (req,res) => {
    var model = reservationModel;
    let reservation = new model(req.body);

    //console.log("this is the resrvation" + reservation);

    reservation.save(function(doc, err){
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    })
})

module.exports = ReservationRouter;