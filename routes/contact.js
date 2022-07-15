const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

module.exports = router;