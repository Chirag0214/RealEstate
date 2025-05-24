const express = require('express');
const Model = require('../models/realtorModel');

const router = express.Router();

// Add new realtor
router.post('/add', (req, res) => {
    new Model(req.body).save()
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get all realtors
router.get('/getall', (req, res) => {
    Model.find()
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get realtor by ID
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update realtor
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete realtor
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Authenticate realtor (login)
router.post('/authenticate', (req, res) => {
    Model.findOne({ email: req.body.email, password: req.body.password })
        .then(result => {
            if (result) res.json(result);
            else res.status(401).json({ message: 'Login Failed' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get realtor by email
router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
