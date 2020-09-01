var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReservationSchema = new Schema({
  Date: {
    type: Date,
    required: true,
  },

  Reserver_id: {
    type: String,
    unique: true,
    required: true,
  },

  Reserver_name: {
    type: String,
    required: true,
  },

  Printer_used: {
    type: String,
    required: true,
  },

  Duration: {
    type: Number,
    required: true,
  },
  Comments: {
    type: String,
    required: true,
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

  //PUT
  put: function(req, res) {
    this.findById({
      _id: req.params.id
    },
  )
  .exec().then((reservation) =>{
    res.json(reservation);
  })
  .catch((err) => {
    console.log('Error: ' + err);
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

  //GET  (single entry by reserver_id)
  getByName: function(req, res) {
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
  get: function(req, res) {
    this.find({Date: req.body.Date})
    .then((reservation) => {
      res.json(reservation);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  // GET (all entries)
  get: function(req, res) {
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