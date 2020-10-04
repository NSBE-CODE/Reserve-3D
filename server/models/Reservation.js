var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReservationSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },

  reserver_id: {
    type: String,
    unique: true,
    required: true,
  },

  reserver_name: {
    type: String,
    required: true,
  },

  printer_used: {
    type: String,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  comments: {
    type: String,
    required: false,
  }
});

ReservationSchema.statics = {
  // POST
  post: function(req,res) {
    var reservation = req.body;
    this.create()
    .then((reservation)=>{
        res.json(reservation);
    })
    .catch((err)=>{
        console.log('Error occured: ' + err);  
    });
  },

  // DELETE
  delete: function(req, res) {
    this.deleteOne({
      Name: req.body.Name
    })
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  //GET  (multiple entries by reserver_id)
  getById: function(req, res) {
    this.findOne({
      Name: req.body.Reserver_id
    })
    .exec().then((reservation) => {
      res.json(reservation)
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  // GET (multiple entries by date)
  getByDate: function(req, res) {
    this.find({Date: req.body.Date})
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  // GET (all entries)
  getAll: function(req, res) {
    this.find({})
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },
};


var Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;