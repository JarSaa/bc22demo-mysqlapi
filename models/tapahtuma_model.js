const db = require('../database');

const tapahtuma = {
  getById: function(id, callback) {
      return db.query("select TAPAHTUMA_ID, TAPAHTUMA_NIMI, to_char(TAPAHTUMAN_PVM,'DD.MM.YYYY') as TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA, OS_MAARA_ALLE29, OS_MAARA_YLI28, OS_MAARA_UUSIA, KESTO_TUNTEINA, AUTETTUJA from tapahtuma where tapahtuma_id=$1", [id], callback);
     },
  getAll: function(callback) {
    //return db.query('select * from tapahtuma', callback);     
    return db.query("select TAPAHTUMA_ID, TAPAHTUMA_NIMI, to_char(TAPAHTUMAN_PVM,'DD.MM.YYYY') as TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA, OS_MAARA_ALLE29, OS_MAARA_YLI28, OS_MAARA_UUSIA, KESTO_TUNTEINA, AUTETTUJA from tapahtuma order by DATE(TAPAHTUMAN_PVM)", callback);
    //return db.query('select TAPAHTUMA_ID, TAPAHTUMA_NIMI, DATE_FORMAT(TAPAHTUMAN_PVM, "%d.%m.%Y") TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA, OS_MAARA_ALLE29, OS_MAARA_YLI28, OS_MAARA_UUSIA, KESTO_TUNTEINA, AUTETTUJA from tapahtuma order by DATE(TAPAHTUMAN_PVM)', callback);
        
  },
  add: function(tapahtuma, callback) {
    return db.query("insert into tapahtuma (TAPAHTUMA_NIMI,TAPAHTUMAN_PVM, OS_MAARA_YHTEENSA,OS_MAARA_ALLE29,OS_MAARA_UUSIA,KESTO_TUNTEINA,AUTETTUJA) values($1,to_date($2,'DD.MM.YYYY'),$3,$4,$5,$6,$7)",
      [tapahtuma.nimi, tapahtuma.pvm, tapahtuma.maara, tapahtuma.maara29, tapahtuma.uusia, tapahtuma.tunti, tapahtuma.autettuja],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query("delete from tapahtuma where tapahtuma_id=$1", [id], callback);
  },
  update: function(id, tapahtuma, callback) {
    return db.query(
      "update tapahtuma set TAPAHTUMA_NIMI=$1, TAPAHTUMAN_PVM=to_date($2,'DD.MM.YYYY'), OS_MAARA_YHTEENSA=$3, OS_MAARA_ALLE29=$4, OS_MAARA_UUSIA=$5, KESTO_TUNTEINA=$6 ,AUTETTUJA=$7 where tapahtuma_id=$8",
      [tapahtuma.nimi, tapahtuma.pvm, tapahtuma.maara, tapahtuma.maara29, tapahtuma.uusia, tapahtuma.tunti, tapahtuma.autettuja ,id],
      callback
    );
  }
};
module.exports = tapahtuma;