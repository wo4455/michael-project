const mongoose = require('mongoose');
const Joi = require('Joi');

const formSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true
    },
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        maxlength: 5000
    }
})

const Form = mongoose.model('Form', formSchema);

function validateForm(form) {
    const schema =  {
        firstName: Joi.string().min(2).max(50).required(),
        lastName: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(5).max(50).required(),
        subject: Joi.string().required(),
        message: Joi.string().max(5000)
    };

    return Joi.validate(form, schema);
}

exports.Form = Form;
exports.validate = validateForm;