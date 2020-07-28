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

//Check with everyone to see if CRUD is necessary

var Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;