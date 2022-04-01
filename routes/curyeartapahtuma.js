const express = require('express');
const router = express.Router();
const tapahtuma = require('../models/curyeartapahtuma_model');

router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    tapahtuma.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
        //response.json(dbResult[0]);
      }
    });
  } else {
    tapahtuma.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
        //response.json(dbResult[0]);
      }
    });
  }
});


module.exports = router;