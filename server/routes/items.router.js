const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  pool
    .query(`SELECT * FROM "items" ORDER BY id`) // TO DO: create query
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT:', error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const newItem = req.body;
  const userId = req.user.id;

  const query = `INSERT INTO "items" ("title", "description", "user_id")
  VALUES ($1, $2, $3)`;

  pool.query(query, [newItem.title, newItem.description, userId])
  .then(() => res.sendStatus(201))
  .catch(error => {
    console.log('Add Items Post Request Failed.', error);
    res.sendStatus(500);
  })
});

router.delete('/:id', (req, res) => {
  // endpoint functionality
  const idToDelete = req.params.id;
  console.log('req.params.id:', idToDelete);
  const queryText = `DELETE FROM "items" WHERE id=$1`;
  pool.query(queryText, [idToDelete])
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.log('Error:', error);
      res.sendStatus(500);
    })
});

router.put('/:id', (req, res) => {
  // endpoint functionality
  const updatedItem = req.body;//this is the action.payload from items saga
  const itemId = req.params.id;//this is from the api/items/${action.payload.id} from items saga
  console.log('req.body',req.body)
  console.log('id',req.params.id)

  const queryText = `UPDATE items SET "title" = $1, "description" = $2 WHERE id=$3`
  pool
  .query(queryText, [updatedItem.title, updatedItem.description, itemId])
  .then((result) => {
    res.sendStatus(200);
  
  })
  .catch(error => {
    console.log(error)
  })



});

module.exports = router;
