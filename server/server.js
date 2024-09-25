// ./server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  
require('dotenv').config(); // since using .env file

const app = express();

// CORS middleware configuration
app.use(cors({ origin: 'http://localhost:3000' }));  // Setting origin for frontend

// Express configuration
app.use(express.json());  // Used for JSON parsing

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err)); // Alerting user if there's a connection issue

// Routes
const recipeRoutes = require('./routes/recipes'); // Importing recipe routes
app.use('/api', recipeRoutes);

// Start the server
const PORT = process.env.PORT || 5001; // Port set to 5001 here, can be changed if necessary
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
}); // const