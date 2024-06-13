const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200)
    const queryText = `
      
    `;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error in GET ', err);
        res.sendStatus(500);
      });
  });
;

// add a new favorite
router.post('/', (req, res) => {
  
  
  res.sendStatus(201);
  pool.query(queryText, queryValues)
  .then((result) => { res.sendStatus(201); })
  .catch((err) => {
    console.log('Error in POST /api/plants', err);
    res.sendStatus(500);
  });
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  pool.query(queryText, queryValues)
    .then((result) => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error in PUT /:id', err);
      res.sendStatus(500);
});
})
// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);

  const queryText = `
  
`;
pool.query(queryText, [req.params.id])
  .then(() => { res.sendStatus(200); })
  .catch((err) => {
    console.log('Error in DELETE /:id', err);
    res.sendStatus(500);
  });
});


module.exports = router;
