const controller = require('./chat.controller');
const express = require('express');
const router = express.Router();

router.get('/chat',controller.room);

module.exports = router;