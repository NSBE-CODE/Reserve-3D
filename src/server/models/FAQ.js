var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FAQSchema = new Schema({
  Question: {
    type: String,
    required: true,
  },
  Answer: {
    type: String,
    required: true,
  }
});

//CRUD Stuff goes here
FAQSchema.statics = {
  // POST
  post: function(req, res) {
    var faq = req.body;
    this.create(faq)
    .then((faq) => {
      res.json(faq);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  //PUT
  put: function(req, res) {
    this.findById({
      _id: req.params.id
    },
  )
  .exec().then((faq) =>{
    res.json(faq);
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
    .then((faq) => {
      res.json(faq);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  //GET (single entry)
  getByName: function(req, res) {
    this.findOne({
      Name: req.body.Name
    })
    .exec().then((faq) => {
      res.json(faq)
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  // GET (all entries)
  get: function(req, res) {
    this.find({})
    .then((faq) => {
      res.json(faq);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },
};


var FAQ = mongoose.model('FAQ', FAQSchema);
module.exports = FAQ;