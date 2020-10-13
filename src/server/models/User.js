const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const userSchema = new Schema ({
    ufid: {type:Number, required:true, unique:true, trim:true, minlength:3},
    email: {type:String, required:true, unique:true, trim:true, minlength:3},
    userLevel: {type:String, required:true, unique:true, trim:true},
    hoursPrinted: {type:Number, required:true},
    limit: {type:Number, required:true},
    status: {type:bool, required:true},
    banEnd: {type:Date},
    professor: {type:String,required:true},
    phoneNum: {type:Number, required:true},
    name:{type:String, required:true},
    officeHours: {
        day:{type:Number},
        start:{type:Number},
        end:{type:Number},
        location:{type:String}
    }

}, {
    timestamps:true,
});

const User = mongose.model('User',userSchema)

module.exports=User;
