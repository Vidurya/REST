// src/app.js
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const schoolRoutes = require('./src/routes/school');
const studentRoutes = require('./src/routes/student');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/schools', schoolRoutes);
app.use('/api/', studentRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = app;