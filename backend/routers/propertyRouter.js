const express = require('express');
const Property = require('../models/propertyModel');

const router = express.Router();

// Add new property
router.post('/add', (req, res) => {
  new Property(req.body).save()
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all properties
router.get('/getall', (req, res) => {
  Property.find()
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get property by ID
router.get('/getbyid/:id', (req, res) => {
  Property.findById(req.params.id)
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update property
router.put('/update/:id', (req, res) => {
  Property.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete property
router.delete('/delete/:id', (req, res) => {
  Property.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
