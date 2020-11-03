const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');
const config = require("./config.js");

const reservationRouter = require('./routes/reservationRouter.js');
const printerRouter = require('./routes/printerRouter.js');
const FAQRouter = require('./routes/FAQRouter.js');
const galleryRouter = require('./routes/galleryRouter.js');
const labHoursRouter = require('./routes/labHoursRouter.js');

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(config.db.uri,  { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true }).then(() => { 
  console.log('mongoose connected!')
});

app.use('/api/Reservation', reservationRouter);
app.use('/api/Printer', printerRouter);
app.use('/api/FAQ', FAQRouter);
app.use('/api/Gallery', galleryRouter);
app.use('/api/LabHours', labHoursRouter);


app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});