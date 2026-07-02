const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Define API paths and attach them to controllers
router.get('/health', mainController.checkHealth);

module.exports = router;
