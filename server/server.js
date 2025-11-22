const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const doctorRoutes = require('./routes/doctorRoutes');

dotenv.config();

connectDB();

const app = express()


app.use(express.json());
app.use('/api', doctorRoutes);


const PORT = process.env.PORT || 3000;
app.listenerCount(PORT,()=>{
    console.log(`Server Running on http://localost:${PORT}`);
})