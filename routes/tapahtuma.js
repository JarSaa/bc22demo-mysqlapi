const express = require('express');
const router = express.Router();
const tapahtuma = require('../models/tapahtuma_model');

router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    tapahtuma.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        //response.json(dbResult);
        response.json(dbResult[0]);
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


router.post('/', 
function(request, response) {
  tapahtuma.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  tapahtuma.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  tapahtuma.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.affectedRows);
    }
  });
});


// router.get('vuodentapahtumat/tapahtuman_pvm'),
//   function(request, response) {
//     tapahtuma.getVuosiTapahtuma(request.params.tapahtuman_pvm, function(err, dbResult)){
//       if (err){
//         response.json(err);
//       }
//       else
//       response.json(dbResult);

//     }
module.exports = router;