/*
Gallery.js (note: are we storing the info of the cam footages?)
    image
    description
CRUD
    PUT
    POST
    DELETE
    GET (single entry)
    GET (all entries)
*/
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GallerySchema = new Schema({
  imageId: { type: Number, required: true },
  image: { data: Buffer, contentType: String },
  description: String,
});

//GET (single entry)
GallerySchema.statics = {
  getSingle: function (req, res) {
    this.findOne({
      imageId: req.body.imageId,
    })
      .then((image) => {
        res.json(image);
      })
      .catch((err) => {
        console.log("Error occured: " + err);
      });
  },

  //GET (all entries)
  getAll: function (req, res) {
    this.find({
      
    })
      .then((image) => {
        res.json(image);
      })
      .catch((err) => {
        console.log("Error occured: " + err);
      });
  },

  //POST
  post: function (req, res) {
    this.create(
      req.body
    )
      .then((image) => {
        res.json(image);
      })
      .catch((err) => {
        console.log("Error occured: " + err);
      });
  },

  //DELETE
  delete: function (req, res) {
    this.deleteOne({
      imageId: req.body.imageId,
    })
      .then((deletionInfo) => {
        res.json(deletionInfo);
      })
      .catch((err) => {
        console.log("Error occured: " + err);
      });
  },
  //PUT
  put: function (req, res) {
    this.findOneAndUpdate(
      {
        imageId: req.body.imageId,
      },
      req.body,
      { new: true }
    )
      .then((image) => {
        res.json(image);
      })
      .catch((err) => {
        console.log("Error occured: " + err);
      });
  },
};

module.exports = mongoose.model("Gallery", GallerySchema);
