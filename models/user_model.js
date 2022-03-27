const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  get: function(callback) {
    return db.query('select * from kayttaja', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from kayttaja where id_kayttaja=?', [id], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.salasana, saltRounds, function(err, hash) {
    //bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('insert into kayttaja (kayttajanimi, salasana) values(?,?)',
      [user.kayttajanimi, hash], callback);
    });
  },
  delete: function(id, callback) {
    return db.query('delete from kayttaja where id_kayttaja=?', [id], callback);
  },
  update: function(id, user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('update kayttaja set kayttaja=?, salasana=? where id_kayttaja=?',
      [user.kayttajanimi, hash, id], callback);
    });
  }

}
          
module.exports = user;