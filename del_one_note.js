var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('D:/Dev/dbtest/db/Data/dbtest.db');
 
db.run("delete from users where firstname = ?" , ['1'], function(err, result){
     if (err != null) {
        console.log('Ошибка sql-запроса!');
        return;
       
    } 
    console.log("Удалили значение");    
    
    });

db.close();