const express = require('express')
const router = express.Router();

const {createPatient, editPatient, viewPatient, deletePatient} = require('../controller/patientController');
router.post('/createPatient', createPatient);
router.get('/viewPatient', viewPatient);
router.put('/editPatient', editPatient);
router.delete('/deletePatient', deletePatient);

module.exports = router;