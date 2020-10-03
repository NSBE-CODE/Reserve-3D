const reservationModel = require('../models/Reservation.js');

exports.getAll = function(req, res) {
    var model = reservationModel;

    model.find().then(function(docs, err){
        if(err){
            res.send(err)
        } else {
            res.send(docs);
        }
    })
}