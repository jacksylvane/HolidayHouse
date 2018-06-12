const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongojs = require("mongojs");
const db = mongojs('mongodb://admin2:18ejksejej52@ds135290.mlab.com:35290/holiday-house', ["houses"]);

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get all logs
router.get('/houses', (req, res) => {
  console.log(req.body);
  db.houses.find((err, users) => {
    if (err) return next(err);
    response.data = users;
    res.json(response);
  });
});
router.post('/add-house', (req, res) => {
  console.log(req.body);
  db.houses.insert(req.body, (err, users) => {
    if (err) return next(err);
    response.data = users;
    response.message = 'Log has been succesfully added.'
    res.json(response);
  });
});

// Delete house
router.post('/delete-house/:id', (req, res) => {
  // console.log("Received DELETE request");
  console.log(req.params.id);
  db.houses.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, (err, users) => {
    if (err) return next(err);
    response.data = users;
    response.message = 'Log has been succesfully deleted.'
    res.json(response);
  });
});

module.exports = router;