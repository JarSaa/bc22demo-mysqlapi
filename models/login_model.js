const db = require('../database');

const login={
  checkPassword: function(username, callback) {
      return db.query('SELECT salasana FROM kayttaja WHERE kayttajanimi = ?',[username], callback); 
    }
};
          
module.exports = login;