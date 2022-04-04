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
        response.json(dbResult.rows[0]);
      }
    });
  } else {
    tapahtuma.getAll(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult.rows);
        console.log(dbResult.rows)
        //response.json(dbResult[0]);
      }
    });
  }
});

router.get('/year/:value/:id?',
function(request, response) {
  console.log(request.params.value)
  if (request.params.id) {
    tapahtuma.getByYearById(request.params.value, request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        //response.json(dbResult);
        response.json(dbResult.rows[0]);
      }
    });
  } else {
    tapahtuma.getAllByYear(request.params.value, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult.rows);
        //response.json(dbResult[0]);
      }
    });
  }
}


);

router.post('/', 
function(request, response) {
  tapahtuma.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.rows);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  tapahtuma.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.rows);
    }
  });
});


router.put('/:id', 
function(request, response) {
  tapahtuma.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.rows.affectedRows);
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