const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('req.user:', req.user);
  if(req.user.access_level === "vendor") {
  pool
    .query(`SELECT * FROM "secret";`) // TO DO: create query
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT:', error);
      res.sendStatus(500);
    });
  } 
  else if (req.user.access_level === "customer") {
    pool
      .query(`SELECT * FROM "secret" WHERE "secrecy_level" < 7 ;`) // TO DO: create query
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log('Error making SELECT:', error);
        res.sendStatus(500);
      });
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
