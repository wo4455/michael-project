const express = require('express');
const mongoose = require('mongoose');
const path = require('node:path');
const router = express.Router();

router.get('', async (req, res) => {
    res.sendFile(path.dirname(__dirname) + '/views/services.html');
});

module.exports = router;