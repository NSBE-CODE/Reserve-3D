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
    mongoose.model('Reservation').create(reservation)
    .then((reservation)=>{
        res.json(reservation);
    })
    
    .catch((err)=>{
        console.log('Error occured: ' + err);  
    });

  },

  // DELETE
  delete: function(req, res) {
    mongoose.model('Reservation').deleteMany()
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  //GET  (multiple entries by reserver_id)
  getById: function(req, res) {
    mongoose.model('Reservation').find({reserver_id: req.body.reserver_id})
    .exec().then((reservation) => {
      res.json(reservation)
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  // GET (multiple entries by date)
  getByDate: function(req, res) {
    mongoose.model('Reservation').find({date: req.body.date})
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  // GET (all entries)
  getAll: function(req, res) {
    mongoose.model('Reservation').find({})
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