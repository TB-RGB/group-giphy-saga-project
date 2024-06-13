const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
    const queryText = `
    SELECT * FROM "favorites"
    `;
    pool.query(queryText)
      .then((result) => { res.send(result.rows) })
      .catch((err) => {
        console.log('Error in GET ', err);
        res.sendStatus(500);
      });
  });
;

// add a new favorite
router.post('/', (req, res) => {
  console.log('favorite added:', req.body)
  let queryText = `INSERT INTO "favorites"("url")
    VALUES ($1);`
    const bodyUrl = [req.body.url]
  pool.query(queryText, bodyUrl)
    .then(result => {
      res.sendStatus(200);
    })
  .catch((err) => {
    console.log('Error in POST /api/favorites', err);
    res.sendStatus(500);
  });
});

// update a favorite's associated category

router.put('/:id', (req, res) => {

  
  const favId = req.params.id;
  const categoryId = req.body.categoryId
  let queryText = `
  UPDATE "favorites"
 SET "category" = $1
 WHERE "id" = $2;`;
 console.log("req.body", req.body)
  pool.query(queryText, [categoryId, favId])
    .then(results => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log( "error with PUT category update",error);
      res.sendStatus(500);
    })
});
// delete a favorite
router.delete('/:id', (req, res) => {

  const queryText = `
  DELETE FROM "favorites" WHERE "id" = $1
  `
  
pool.query(queryText, [req.params.id])
  .then(() => { res.sendStatus(200); })
  .catch((err) => {
    console.log('Error in DELETE /api/favorites', err);
    res.sendStatus(500);
  });
});


module.exports = router;
