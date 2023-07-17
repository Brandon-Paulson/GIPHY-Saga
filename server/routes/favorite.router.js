const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT submission.img_src FROM submission;`
  pool.query(queryText)
    .then((result) => {res.send(result.rows);})
    .catch((err) => {
      console.log('FAILED TO GET GIFS', err);
      res.sendStatus(500);
    })
});

// add a new favorite
router.post('/', (req, res) => {
  const newGif = req.body;
  console.log(newGif);
  const queryText = `INSERT INTO submission ("img_src")
    VALUES ($1);`;
  const queryValues =
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
