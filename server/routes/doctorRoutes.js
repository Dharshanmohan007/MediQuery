const express = require('express')
const router = express.Router();

const {createDoctor, editDoctor, viewDoctor, deleteDoctor} = require('../controller/doctorController')
router.post('/createDoctor', createDoctor);
router.get('/viewDoctor', viewDoctor);
router.put('/editDoctor', editDoctor);
router.delete('/deleteDoctor', deleteDoctor)

module.exports = router;