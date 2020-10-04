const express = require('express');
const PrinterRouter = express.Router();
const PrinterModel = require('../models/Printer.js');


/* How to test:
        -in the terminal, cd into the server folder
        -run "node server.js" to start the server, and connect to mongoose
        -follow instructions below to test each function on Postman */


// (should create 1 new printer)
// Select POST and type localhost:4000/api/Printer
// Enter the entry in json format following the Printer Schema before hitting send
PrinterRouter.post('/', PrinterModel.post);

// (should update all fields of a printer except _id field)
// Select PUT and type localhost:4000/api/Printer
// Enter the entry in json format following the Printer Schema before hitting send
PrinterRouter.put('/', PrinterModel.put);

// (should delete 1 printer)
// Select DELETE and type localhost:4000/api/Printer/
PrinterRouter.delete('/', PrinterModel.delete);

// (should retrieve all printers of a certain reserver_id value)
// Select GET and type localhost:4000/api/Printer/_id
// Enter an entry in json format following the Printer Schema before hitting send
PrinterRouter.get('/_id', PrinterModel.getById);

// (should retrieve all printers)
// Select GET and type localhost:4000/api/Printer/all
PrinterRouter.get('/all', PrinterModel.getAll);


module.exports = PrinterRouter;