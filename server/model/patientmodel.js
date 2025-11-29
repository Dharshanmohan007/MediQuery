const mongoose = require('mongoose')

const patientModel = new mongoose.Schema({
    patientName:{type:String, required:true},
    age:{type:Number,required:true},
    gender:{type:String, reminder:true},
    contactNo:{type:Number, reminder:true},
    address:{type:String, required:true},
    token:{type:Number, required:true},
},{
    timestamps:true
})

module.exports = mongoose.model('patientModel', patientModel);