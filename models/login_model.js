const db = require('../database');

const login={
  checkPassword: function(username, callback) {
      return db.query('SELECT salasana FROM kayttaja WHERE kayttajanimi = $1',[username], callback); 
    }
};
          
module.exports = login;