/*
LabHours.js
    (note: days will be deleted after passing) GET through date
    Date (YYYYMMDD) 
    Open (bool)
    Hours[]
        Hour (double)
        Available (bool)
        LargePrintersAvailable (int)
        MediumPrintersAvailable (int) 
CRUD
    PUT
    POST
    DELETE
    GET (single entry from date)
    GET (7 entries. Two before the date, the date, and two after the date)
    no get all function needed
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema
var LabHoursSchema = new Schema({
    Date: {type: Date, required: true},
    Open: {type: Boolean, default: false},
    Hours: {
        Hour: {type: Number, required: true},
        Available: {type: Boolean, default: false},
        LargePrintersAvailable: {type: Number, default: 0},
        MediumPrintersAvailable: {type: Number, default: 0},
    },
});

//CRUD Functions
//Get
LabHoursSchema.statics = {
    getByDate: function(req,res) {
        this.findOne({
            Date: req.body.Date
        })
        .exec()
        .then((labHour)=>{
            res.json(labHour)
        })
        .catch((err)=>{
            console.log('Error occured: ' + err);  
        });
    },
    //Get Dates 2 days before and after the selected date
    get5ByDate: function(req,res) {
        var date = new Date(req.body.Date);
        var end = new Date(date.setDate(date.getDate() + 2));
        var begin = new Date(date.setDate(date.getDate() - 4));
        this.find({
            Date: {$gte: begin, $lte: end}
        })
        .exec()
        .then((labHours)=>{
            res.json(labHours);
        })
        .catch((err)=>{
            console.log('Error occured: ' + err);  
        });
    },
    //POST
    post: function(req,res) {
        var labHour = req.body;
        this.create(labHour)
        .then((labHour)=>{
            res.json(labHour);
        })
        .catch((err)=>{
            console.log('Error occured: ' + err);  
        });
    },
    //DELETE
    delete: function(req,res) {
        this.deleteOne({Date: req.body.Date})
        .then((deletionInfo)=>{
            res.json(deletionInfo);
        })
        .catch((err)=>{
            console.log('Error occured: ' + err);  
        });
    },
    //PUT
    put: function(req,res) {
        this.findOneAndUpdate({
            Date: req.body.Date // Filter
        },
        {//What we are updating
            Open: req.body.Open,
            Hours: req.body.Hours,
        },{new: true}
        )
        .exec()
        .then((labHour)=>{
            res.json(labHour);
        })
        .catch((err)=>{
            console.log('Error occured: ' + err);  
        });
    }, 
};


var LabHours = mongoose.model('LabHours', LabHoursSchema);
module.exports = LabHours;