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
    mongoose.model('FAQ').create(faq)
    .then((faq) => {
      res.json(faq);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },

  //PUT (by _id)
  put: function(req, res) {
    mongoose.model('FAQ').findOneAndUpdate({answer: req.params.answer}, 
      req.body)
  .then((faq) =>{
    res.json(faq);
  })
  .catch((err) => {
    console.log('Error: ' + err);
  });
},

  // DELETE (all)
  delete: function(req, res) {
    mongoose.model('FAQ').deleteMany()
    .then((faq) => {
      res.json(faq);
    })
    .catch((err) => {
      console.log('Error: ' + err);
    });
  },
  

  // GET (all entries)
  getAll: function(req, res) {
    mongoose.model('FAQ').find({})
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