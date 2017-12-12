var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('D:/Dev/dbtest/db/Data/dbtest.db');
 
db.run("update users set firstname = ? where lastName = ?" , ['Alexon', 'Osp'], function(err, result){
     if (err != null) {
        console.log(err)
        console.log('Ошибка sql-запроса!');
        return;
       
    } 
    console.log("Обновили значение");    
    
    });

db.close();