const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./StudentRoutes/StudentRoutes')
const app = express();
const cors = require('cors');
const dotenv = require('dotenv')


//  Load environment variables from .env file
dotenv.config();


//PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('mongodb connected...'))
.catch((err)=>console.log(err))

// Routes
app.use('/students', studentRoutes);

// Start Server
app.listen(4000, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
