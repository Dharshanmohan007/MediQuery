const mongoose = require('mongoose')

const doctorModel = new mongoose.Schema({
    doctorName:{type:String, required:true},
    registerNo:{type:Number, required:true},
    specilization:{type:String, required:true},
    hospitalName:{type:String, required:true},
    contactNo:{type:Number, required:true},
    email:{type:String, required:true},
},{
    timestamps:true
})

module.exports = mongoose.model('doctorModel', doctorModel);