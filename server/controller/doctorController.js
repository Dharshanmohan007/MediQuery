const doctorModel  = require('../model/doctorModel')

const createDoctor =async(req,res)=>{
    try{
        console.log(req.body);
        const {doctorName, registerNo, specilization, hospitalName, contactNo, email}=req.body;
        const doctor = await doctorModel.findOne({registerNo});
        if(doctor) return res.status(400).json({message:'Doctor Name was created already'});

        const newDoctor = await doctorModel.create({doctorName, registerNo, specilization, hospitalName, contactNo, email});
        console.log("new", newDoctor);

        res.status(200).json({message:"Doctor Profile was created",doctor:{
            _id:newDoctor._id,
            doctorName:newDoctor.doctorName,
            registorNo:newDoctor.registerNo,
            specilization:newDoctor.specilization,
            hospitalName:newDoctor.hospitalName,
            contatNo:newDoctor.contactNo,
            email:newDoctor.email
        }})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const viewDoctor = async(req,res)=>{
    try{
        const {registerNo, email} = req.body;

        const viewDoctor = await doctorModel.findOne({$or:[{registerNo}, {email}]});
        if(!viewDoctor) return res.status(400).json({message:"Doctor Detail was not forund"})
        
        res.status(200).json({message:'university dispalyed successfully!', doctor:{
            _id:viewDoctor._id,
            doctorName:viewDoctor.doctorName,
            registorNo:viewDoctor.registerNo,
            specilization:viewDoctor.specilization,
            hospitalName:viewDoctor.hospitalName,
            contatNo:viewDoctor.contactNo,
            email:viewDoctor.email
        }})
    }
    catch(error){
        res.status(500).josn({message:error.message})
    }
}

const editDoctor = async(req,res)=>{
    try{
        const {registerNo} = req.body;

        const editDoctor = await doctorModel.findOne({registerNo});
        if(!editDoctor) return res.status(400).json({message:'Doctor Detail was not forund'});

        const updateDoctor = await doctorModel.findOneAndUpdate(
            {registerNo},
            {$set: req.body},
            {new:true}
        )

        res.status(200).json({message:"Doctor Details was updated Successfully", doctor:updateDoctor})
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const deleteDoctor = async(req,res)=>{
    try{
        const {registerNo} = req.body;

        const deleteDoctor = await doctorModel.findOne({registerNo});
        if(!deleteDoctor) return res.status(400).json({message:'Doctor Detail was not found'});

        await doctorModel.deleteOne({registerNo});
        res.status(200).json({messsage:'Doctor detail was deleted Successfully', doctor:deleteDoctor});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    createDoctor,
    viewDoctor,
    editDoctor,
    deleteDoctor
}