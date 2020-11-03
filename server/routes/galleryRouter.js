const express = require('express');
const GalleryRouter = express.Router();
const GalleryModel = require('../models/Gallery.js');


/* How to test:
        -in the terminal, cd into the server folder
        -run "node server.js" to start the server, and connect to mongoose
        -follow instructions below to test each function on Postman */


// (should create 1 new Gallery post)
// Select POST and type localhost:4000/api/Gallery
// Enter the entry in json format following the Gallery Schema before hitting send
GalleryRouter.post('/', GalleryModel.post);

// (should retrieve all gallery posts of a certain imageId value)
// Select GET and type localhost:4000/api/Gallery/_id
// Enter an entry in json format following the Gallery Schema before hitting send
GalleryRouter.get('/_id', GalleryModel.getSingle);

// (should update all fields of a Gallery post except _id field)
// Select PUT and type localhost:4000/api/Gallery
// Enter the entry in json format following the Gallery Schema before hitting send
GalleryRouter.put('/', GalleryModel.put);

// (should delete all Gallery posts)
// Select DELETE and type localhost:4000/api/Gallery
GalleryRouter.delete('/', GalleryModel.delete);

// (should retrieve all Gallery posts)
// Select GET and type localhost:4000/api/Gallery/all
GalleryRouter.get('/all', GalleryModel.getAll);


module.exports = GalleryRouter;