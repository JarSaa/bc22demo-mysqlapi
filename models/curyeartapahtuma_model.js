const db = require('../database');

const curyeartapahtuma = {
    getById: function(id, callback) {
        //return db.query('select * from tapahtuma where tapahtuma_id=?', [id], callback);
        return db.query('select TAPAHTUMA_ID, TAPAHTUMA_NIMI, LUOKKA_ID, DATE_FORMAT(TAPAHTUMAN_PVM, "%d.%m.%Y") TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA, OS_MAARA_ALLE29, OS_MAARA_YLI28, OS_MAARA_UUSIA, KESTO_TUNTEINA, AUTETTUJA from tapahtuma where DATE_FORMAT(TAPAHTUMAN_PVM, "%Y")=?', [id], callback);   //TAPAHTUMA_ID, TAPAHTUMA_NIMI,LUOKKA_ID,TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA,OS_MAARA_ALLE29,OS_MAARA_YLI28,OS_MAARA_UUSIA,KESTO_TUNTEINA,AUTETTUJA
      },
  getAll: function(callback) {
    return db.query('select TAPAHTUMA_ID, TAPAHTUMA_NIMI, DATE_FORMAT(TAPAHTUMAN_PVM, "%d.%m.%Y") TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA, OS_MAARA_ALLE29, OS_MAARA_YLI28, OS_MAARA_UUSIA, KESTO_TUNTEINA, AUTETTUJA from tapahtuma where YEAR(TAPAHTUMAN_PVM) = YEAR(SYSDATE()) order by DATE(TAPAHTUMAN_PVM)', callback);
     
  },
};
module.exports = curyeartapahtuma
;