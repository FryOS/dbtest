var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('D:/Dev/dbtest/db/Data/dbtest.db');

var check;
db.serialize(function() {

  db.run("CREATE TABLE if not exists user_info (info TEXT)");
  var stmt = db.prepare("INSERT INTO user_info VALUES (?)");
  //for (var i = 0; i < 2; i++) {
  //    stmt.run("Alexey " + i);
  //}
  stmt.run("Alexey ");
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM user_info", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});

db.all("select * from user_info", [], function(err, result){
    if (err != null) {
       console.log('Ошибка sql-запроса!');
       return;
      
   } 
   console.log(result);    
   
   });

db.run("INSERT INTO user_info (info) VALUES (?)", ['Kulikov' ], function(err, result){
    if (err != null) {
        console.log('Ошибка sql-запроса!');
    console.log(err);
   } 
    
   console.log("Запись выполнена"); 
});

db.run("update user_info set info = ? where info = ?" , ['Alexey Ospischev', 'Alexey 0'], function(err, result){
    if (err != null) {
       console.log(err)
       console.log('Ошибка sql-запроса!');
       return;
      
   } 
   console.log("Обновили значение");    
   
   });

db.run("delete * from user_info " , function(err, result){
    if (err != null) {
       console.log('Ошибка sql-запроса!');
       return;
      
   } 
   console.log("Удалили значение");    
   
});


db.close();