const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    console.log('req.params.id:', req.params.id);
    const userId = req.params.id;
    
    pool
      .query('SELECT * FROM "items" WHERE user_id = $1', [userId]) // TO DO: create query
      .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log('Error making SELECT:', error);
        res.sendStatus(500);
      });
  });

  module.exports = router;