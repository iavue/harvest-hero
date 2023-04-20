const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
    console.log('What is req.user.id in my bio.router:', userId);
    pool
      .query(`SELECT * FROM "vendorprofile" WHERE user_id = ${userId}`) // TO DO: create query
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log('Error making SELECT:', error);
        res.sendStatus(500);
      });
  });

router.post('/', (req, res) => {
    // POST route code here
    const newBio = req.body;
    const userId = req.user.id;
  
    const query = `INSERT INTO "vendorprofile" ("vendor_name", "bio_description", "location",
    "pmt_methods", "stall_num", "user_id")
    VALUES ($1, $2, $3, $4, $5, $6)`;
  
    pool.query(query, [newBio.vendor_name, newBio.bio_description, newBio.location, newBio.pmt_methods, newBio.stall_num, userId])
    .then(() => res.sendStatus(201))
    .catch(error => {
      console.log('Add Items Post Request Failed.', error);
      res.sendStatus(500);
    })
  });

module.exports = router;