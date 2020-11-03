const express = require('express');
const LabHoursRouter = express.Router();
const LabHoursModel = require('../models/LabHours.js');


/* How to test:
        -in the terminal, cd into the server folder
        -run "node server.js" to start the server, and connect to mongoose
        -follow instructions below to test each function on Postman */


// (should create 1 new LabHours post)
// Select POST and type localhost:4000/api/LabHours
// Enter the entry in json format following the LabHours Schema before hitting send
LabHoursRouter.post('/', LabHoursModel.post);

// (should retrieve all LabHours posts of a certain date value (should only be one))
// Select GET and type localhost:4000/api/LabHours
// Enter an entry in json format following the LabHours Schema before hitting send
LabHoursRouter.get('/', LabHoursModel.getByDate);

// (should retrieve 2 days before and after the selected date value)
// Select GET and type localhost:4000/api/LabHours/5
// Enter an entry in json format following the LabHours Schema before hitting send
LabHoursRouter.get('/5', LabHoursModel.get5ByDate);

// (should update all fields of a LabHours post except _id field)
// Select PUT and type localhost:4000/api/LabHours
// Enter the entry in json format following the LabHours Schema before hitting send
LabHoursRouter.put('/', LabHoursModel.put);

// (should delete all LabHours posts)
// Select DELETE and type localhost:4000/api/LabHours
LabHoursRouter.delete('/', LabHoursModel.delete);


module.exports = LabHoursRouter;