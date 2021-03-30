var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PrinterSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },

  status: {
    type: String,
    required: true,
    enum: ['ready', 'offline', 'error'],
  },

  last_used: {
    type: Date,
  },

  size: {
    type: String,
    required: true,
    enum: ['large', 'medium', 'small'],
  },
  
});

//CRUD
PrinterSchema.statics = {
  // POST (get from _id)
  post: function(req, res) {
    var printer = req.body;
    mongoose.model('Printer').create(printer)
    .then((printer) => {
      res.json(printer);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  //PUT
  put: function(req, res) {
    mongoose.model('Printer').findOneAndUpdate({_id: req.body._id}, req.body)
  .then((printer) =>{
    res.json(printer);
  })
  .catch((err) => {
    console.log('Error: ' + err);
  });
},

  // DELETE
  delete: function(req, res) {
    mongoose.model('Printer').deleteOne({
      name: req.body.name
    })
    .then((printer) => {
      res.json(printer);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  //GET (single entry)
  getById: function(req, res) {
    mongoose.model('Printer').findOne({
      _id: req.body._id
    })
    .exec().then((printer) => {
      res.json(printer)
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  // GET (all entries)
  getAll: function(req, res) {
    mongoose.model('Printer').find({})
    .then((printer) => {
      res.json(printer);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },
};

var Printer = mongoose.model('Printer', PrinterSchema);
module.exports = Printer;
