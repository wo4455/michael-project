const express = require('express');
const mongoose = require('mongoose');
const path = require('node:path');
const { Form, validate } = require('../models/Form');

const router = express.Router();

router.get('', async (req, res) => {
    res.sendFile(path.dirname(__dirname) + '/views/contact.html');
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send("Status 400 not found.");

    const form = new Form({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })

    await form.save();

    res.send(form);
})

module.exports = router;