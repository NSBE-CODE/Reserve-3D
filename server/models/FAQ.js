var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FAQSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
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

  //PUT (by _id)
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

  // DELETE (by _id)
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

  // GET (all entries)
  getAll: function(req, res) {
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