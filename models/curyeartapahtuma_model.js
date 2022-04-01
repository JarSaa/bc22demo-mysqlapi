const db = require('../database');

const curyeartapahtuma = {
  getById: function(id, callback) {
        //return db.query('select * from tapahtuma where tapahtuma_id=?', [id], callback);
        return db.query("select TAPAHTUMA_ID, TAPAHTUMA_NIMI, LUOKKA_ID, to_char(TAPAHTUMAN_PVM,'DD.MM.YYYY') as TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA, OS_MAARA_ALLE29, OS_MAARA_YLI28, OS_MAARA_UUSIA, KESTO_TUNTEINA, AUTETTUJA from tapahtuma where date_part('year', tapahtuman_pvm)=$1", [id], callback);   
      },
  getAll: function(callback) {
    return db.query("select TAPAHTUMA_ID, TAPAHTUMA_NIMI, to_char(TAPAHTUMAN_PVM,'DD.MM.YYYY') as TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA, OS_MAARA_ALLE29, OS_MAARA_YLI28, OS_MAARA_UUSIA, KESTO_TUNTEINA, AUTETTUJA from tapahtuma where date_part('year', tapahtuman_pvm)=date_part('year', now()) order by TAPAHTUMAN_PVM", callback);
     
  },
};
module.exports = curyeartapahtuma
;