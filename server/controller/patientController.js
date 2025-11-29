const patientModel = require('../model/patientmodel')

const createPatient=async(req,res)=>{
    try{
        const {patientName,age,gender,contactNo, address,token } = req.body;
        const patient = await patientModel.findOne({token});
        if(patient) return res.status(400).json({message:'Patient Deatils was Created Already'})

        const newPatient = await patientModel.create({patientName,age,gender,contactNo, address,token});
        res.status(201).json({message:'Patient Detail was Created Successfully', patient:newPatient})
    }
    catch(error){
        res.status(500),json({message:error.message})
    }
}

const viewPatient=async(req,res)=>{
    try{
        const {token,contactNo} = req.body;

        const viewPatient = await patientModel.findOne({$or:[{token},{contactNo}]});
        if(!viewPatient) return res.status(400).json({message:"Patient Details were Not Found"});

        res.status(201).json({message:"Patient Details Displayed Successfully", patient:viewPatient});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const editPatient=async(req,res)=>{
    try{
        const {contactNo} = req.body;

        const editPatient = await patientModel.findOne({contactNo});
        if(!editPatient) return res.status(400).json({message:'Patient Details was Not Found'});

        const updatePatient = await patientModel.findOneAndUpdate(
            {contactNo},
            {$set: req.body},
            {new:true}
        )
        res.status(201).json({message:"Patient Details was Updated Successfully", patient:updatePatient});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const deletePatient=async(req,res)=>{
    try{
        const {contactNo} =req.body;

        const deletePatient = await patientModel.findOne({contactNo});
        if(!deletePatient) return res.status(400).json({message:"Patient Details was not Found"});

        await patientModel.deleteOne({contactNo});
        res.status(201).json({message:"Patient Details was Deleted Successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports = {
    createPatient,
    viewPatient,
    editPatient,
    deletePatient
}