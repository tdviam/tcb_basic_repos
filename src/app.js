const express = require('express');
const mainRoutes = require('./routes/mainRoutes');

const app = express();

// Global Middleware to parse JSON request bodies
app.use(express.json());

// Link application routes
app.use('/api', mainRoutes);

// Export app configuration for server testing or initialization
module.exports = app;
