const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const login = require('../models/login_model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

router.post('/', 
  function(request, response) {
    //if(request.body.username && request.body.password){
    if(request.body.kayttajanimi && request.body.salasana){
      const user = request.body.kayttajanimi;
      const pass = request.body.salasana;
      
        login.checkPassword(user, function(dbError, dbResult) {
          if(dbError){
            response.json(dbError);
          }
          else{
            if (dbResult.rows.length > 0) {
              //bcrypt.compare(pass,dbResult[0].password, function(err,compareResult) {
              bcrypt.compare(pass,dbResult.rows[0].salasana, function(err,compareResult) {
                if(compareResult) {
                  console.log("succes");
                  const token = generateAccessToken({ username: user });
                  response.send(token);
                }
                else {
                    console.log("wrong password");
                    response.send(false);
                }			
              }
              );
            }
            else{
              console.log("user does not exists");
              response.send(false);
            }
          }
          }
        );
      }
    else{
      console.log("pooo username or password missing");
      response.send(false);
    }
  }
);

function generateAccessToken(username) {
  dotenv.config();
  return jwt.sign(username, process.env.MY_TOKEN, { expiresIn: '3600s' });
}

module.exports=router;