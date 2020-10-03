const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require('mongoose');

const db = require('./config/config.js');
const reservationRouter = require('./routes/reservationRouter.js');

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

/*mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
  console.log(`Successfully connected to mongoose database.`)
});*/

mongoose.connect('mongodb+srv://nsbecode:reserve3d@reserve3d.7aekn.mongodb.net/reserve3d?retryWrites=true&w=majority',  { useNewUrlParser: true,  useUnifiedTopology: true }).then(() => { 
  console.log('mongoose connected!')
});
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api/Reservation', reservationRouter);

app.get('/', (req, res) => {
  res.send('we are on ehome');
});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

