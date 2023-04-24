const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:searchTerm', (req, res) => {
    console.log('search query is', req.params.searchTerm);
  
    // name=value&name=value
    let queryText = `SELECT * FROM "items" WHERE "title" ILIKE '%' || '${req.params.searchTerm}' || '%' OR "description" ILIKE '%' || '${req.params.searchTerm}' || '%'`;
    pool
      .query(queryText)
      .then((response) => {
        console.log('What is in my response.rows from search.router:', response.rows);
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('Could not return search.', err);
        res.sendStatus(500);
      });
  });
  

module.exports = router;