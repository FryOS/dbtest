var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('D:/Dev/dbtest/db/Data/dbtest.db');


db.run("INSERT INTO users (firstName , lastName) VALUES ( $firstName, $lastName)", 
    {
        $firstName: "Alex",
        $lastName: "Osp"

    }, 
    function(err, result){
    if (err != null) {
        console.log('Ошибка sql-запроса!');
    console.log(err);
   } 
    
   console.log("Запись выполнена"); 
   });

db.close();