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
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GallerySchema = new Schema({
    image: { data: Buffer, contentType: String },
    description: String,
});


//PUT
//POST
//DELETE
//GET (single entry)
//GET (all entries)




module.exports = mongoose.model('Gallery', GallerySchema);