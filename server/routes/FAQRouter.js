const express = require('express');
const FAQRouter = express.Router();
const FAQModel = require('../models/FAQ.js');


/* How to test:
        -in the terminal, cd into the server folder
        -run "node server.js" to start the server, and connect to mongoose
        -follow instructions below to test each function on Postman */


// (should create 1 new FAQ)
// Select POST and type localhost:4000/api/FAQ
// Enter the entry in json format following the FAQ Schema before hitting send
FAQRouter.post('/', FAQModel.post);

// (should update all fields of a FAQ except _id field)
// Select PUT and type localhost:4000/api/FAQ
// Enter the entry in json format following the FAQ Schema before hitting send
FAQRouter.put('/', FAQModel.put);

// (should delete all FAQs)
// Select DELETE and type localhost:4000/api/FAQ
FAQRouter.delete('/', FAQModel.delete);

// (should retrieve all FAQs)
// Select GET and type localhost:4000/api/FAQ
FAQRouter.get('/', FAQModel.getAll);


module.exports = FAQRouter;