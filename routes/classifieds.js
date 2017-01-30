'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex.js');

// MY CRUD ROUTES

router.get('/', (req, res, next) => {
  knex.select('id', 'title', 'description', 'price', 'item_image').from('classifieds')
    .then(classifieds => {
      res.json(classifieds);
    })
    .catch(err => next(err));
});


router.get('/:id', (req, res, next) => {
  let reqID = parseInt(req.params.id);
  knex.select('id', 'title', 'description', 'price', 'item_image').from('classifieds')
   .where({
     id: reqID
   })
    .first()
    .then(classified => {
      res.json(classified);
    })
    .catch(err => next(err));
});


router.post('/', (req, res, next) => {
  knex('classifieds')
    .insert(req.body)
    .returning('*')
    .then(classifieds => {
      delete classifieds[0].created_at;
      delete classifieds[0].updated_at;
      res.json(classifieds[0]);
    })
    .catch(err => next(err));
});


router.patch('/:id', (req, res, next) => {
  let reqID = parseInt(req.params.id);

  knex('classifieds')
    .update(req.body, '*')
    .where({
      id: reqID
    })
    .returning('*')
    .then(classifieds => {
      delete classifieds[0].created_at;
      delete classifieds[0].updated_at;
      res.json(classifieds[0]);
    })
    .catch(err => next(err));
});


router.delete('/:id', (req, res, next) => {
  var classified_del;
  let reqID = parseInt(req.params.id);
  knex('classifieds')
    .where({
      id: reqID
    })
    .first()
    .then((classified) => {
      classified_del = classified;
      return knex('classifieds')
        .del()
        .where({
          id: reqID
        });
    })
    .then(() => {
      delete classified_del.created_at;
      delete classified_del.updated_at;
      res.json(classified_del);
    })
    .catch(err => next(err));
});


module.exports = router;
