const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/gallery', require('./routes/galleryRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

const connectDB = require('./config/db');
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
