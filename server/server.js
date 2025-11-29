const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');

dotenv.config();

connectDB();

const app = express()


app.use(express.json());
app.use('/api', doctorRoutes);
app.use('/api', patientRoutes);


const PORT = process.env.PORT || 3000;
app.listenerCount(PORT,()=>{
    console.log(`Server Running on http://localost:${PORT}`);
})