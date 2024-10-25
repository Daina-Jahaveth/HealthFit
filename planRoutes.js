// Ubicación: /server/routes/planRoutes.js
const express = require('express');
const { getPlan } = require('../controllers/planController');
const router = express.Router();

router.get('/', getPlan);

module.exports = router;
