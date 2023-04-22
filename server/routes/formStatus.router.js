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
        .query(`SELECT "profile_form_submitted" FROM "user" WHERE user_id = ${userId}`) // TO DO: create query
        .then((results) => res.send(results.rows))
        .catch((error) => {
            console.log('Error making SELECT:', error);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    // endpoint functionality
    const formStatus = req.body;//this is the action.payload from formStatus saga
    const userId = req.params.id;//this is from the api/bio/${action.payload.id} from formStatus saga
    console.log('formStatus router req.body:', req.body)
    console.log('formStatus router req.params.id:', req.params.id)

    const queryText = `UPDATE "user" SET "profile_form_submitted"=${req.body} WHERE id=$1`
    pool
        .query(queryText, [userId])
        .then((result) => {
            res.sendStatus(200);

        })
        .catch(error => {
            console.log(error)
        })
});

module.exports = router;