var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReservationSchema = new Schema({
  date: { type: String, required: true },
  Reserver_id: { type: String, unique: true, required: false },
  reserver_name: { type: String, required: true },
  printer_used: { type: String, required: true },
  duration: { type: Number, required: true },
  comments: { type: String }
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
    console.log('I got called');
    var model = ReservationSchema;

    mongoose.model('Reservation').findOne({
      Reserver_id: req.body.Reserver_id
    })
    .then((reservation, err) => {
      if(err) {
        res.send(err);
      } else {
        res.send(reservation);
      }
    });
  },

  // GET (multiple entries by date)
  get: function(req, res) {
    var model = ReservationSchema;

    mongoose.model('Reservation').find({Date: req.body.Date})
    .then((reservation, err) => {
      res.send(reservation);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },


  // GET (all entries)
  getAll: function(req, res) {
    var model = ReservationSchema;
    console.log('No, I got called');
    mongoose.model('Reservation').find().then(function(docs, err){
      if(err){
        res.send(err);
      } else { 
        res.send(docs);
      }
    })
  },

};

var Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;