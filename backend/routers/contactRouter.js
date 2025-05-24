const express = require('express');
const Contact = require('../models/contactModel');

const router = express.Router();

// Add new contact message
router.post('/add', (req, res) => {
    new Contact(req.body).save()
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get all contact messages
router.get('/getall', (req, res) => {
    Contact.find()
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get contact message by ID
router.get('/getbyid/:id', (req, res) => {
    Contact.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete contact message
router.delete('/delete/:id', (req, res) => {
    Contact.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
