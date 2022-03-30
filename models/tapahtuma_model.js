const db = require('../database');

const tapahtuma = {
  getById: function(id, callback) {
    //return db.query('select * from tapahtuma where tapahtuma_id=?', [id], callback);
   return db.query('select TAPAHTUMA_ID, TAPAHTUMA_NIMI, LUOKKA_ID, DATE_FORMAT(TAPAHTUMAN_PVM, "%d.%m.%Y") TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA, OS_MAARA_ALLE29, OS_MAARA_YLI28, OS_MAARA_UUSIA, KESTO_TUNTEINA, AUTETTUJA where tapahtuma_id=?', [id], callback);
   //TAPAHTUMA_ID, TAPAHTUMA_NIMI,LUOKKA_ID,TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA,OS_MAARA_ALLE29,OS_MAARA_YLI28,OS_MAARA_UUSIA,KESTO_TUNTEINA,AUTETTUJA
  },
  getAll: function(callback) {
    return db.query('select TAPAHTUMA_ID, TAPAHTUMA_NIMI, LUOKKA_ID, DATE_FORMAT(TAPAHTUMAN_PVM, "%d.%m.%Y") TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA, OS_MAARA_ALLE29, OS_MAARA_YLI28, OS_MAARA_UUSIA, KESTO_TUNTEINA, AUTETTUJA from tapahtuma order by TAPAHTUMAN_PVM', callback);
    //return db.query('SELECT TAPAHTUMA_ID, TAPAHTUMA_NIMI,LUOKKA_ID, DATE_FORMAT(TAPAHTUMAN_PVM, "%d.%e.%y") as TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA,OS_MAARA_ALLE29,OS_MAARA_YLI28,OS_MAARA_UUSIA,KESTO_TUNTEINA,AUTETTUJA', callback);
  },
  add: function(tapahtuma, callback) {
    return db.query(
      'insert into tapahtuma (TAPAHTUMA_NIMI,LUOKKA_ID,TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA,OS_MAARA_ALLE29,OS_MAARA_YLI28,OS_MAARA_UUSIA,KESTO_TUNTEINA,AUTETTUJA) values(?,?,?,?,?,?,?,?,?)',
      [tapahtuma.nimi, tapahtuma.luokka, tapahtuma.pvm, tapahtuma.maara, tapahtuma.maara29, tapahtuma.maara-tapahtuma.maara29, tapahtuma.uusia, tapahtuma.tunti, tapahtuma.autettuja],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from tapahtuma where tapahtuma_id=?', [id], callback);
  },
  update: function(id, tapahtuma, callback) {
    return db.query(
      //'update book set name=?,author=?, isbn=? where id_book=?',
      'update tapahtuma set TAPAHTUMA_NIMI=?, LUOKKA_ID=?, TAPAHTUMAN_PVM=?, OS_MAARA_YHTEENSA=?, OS_MAARA_ALLE29=?, OS_MAARA_YLI28=? ,OS_MAARA_UUSIA=?, KESTO_TUNTEINA=? ,AUTETTUJA=? where tapahtuma_id=?',
      [tapahtuma.nimi, tapahtuma.luokka, tapahtuma.pvm, tapahtuma.maara, tapahtuma.maara29, tapahtuma.maara-tapahtuma.maara29, tapahtuma.uusia, tapahtuma.tunti, tapahtuma.autettuja ,id],
      callback
    );
  }
};
module.exports = tapahtuma;