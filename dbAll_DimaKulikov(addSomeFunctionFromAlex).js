var sqlite3 = require('sqlite3').verbose();

var repository = {

    _db: null,

    init: function(){
        this._db = new sqlite3.Database('D:/Dev/dbtest/db/Data/dbtest.db'); //открытие базы для работы
    },

    close: function(){
        this.db.close(); //очистка ресурсов
    },

    getUsers: function(ok, err){

        //ok - метод обратного вызова для успеха
        //err - метод обратного вызова для ошибки

        db.all("select * from user_info", [], function(err, result){
            if (err == null) {
                ok(result);
            } 
            else{
                console.log('Ошибка sql-запроса!');
                err();
            }
        });
    },

    deleteUser: function(name, ok, err){
        db.run("delete from user_info where name=?", name, function(err, result){
            if (err == null) {
                console.log("Удалили значение");    
               ok()
            } 
            else{
                err();
            }
        });
    },
    updateUser : function(name, ok, err){
        db.run("update user_info set firstname = ? where lastName = ?" , name, function(err, result){
            if (err != null) {
               console.log(err)
               console.log('Ошибка sql-запроса!');
               return;
              
           } 
           console.log("Обновили значение(Update)");    
           
           });
    },
    addUser : function(name, ok, err){
        db.run("INSERT INTO user_info VALUES ( ? )", name, function(err, result){
            if (err != null) {
                console.log('Ошибка sql-запроса!');
            console.log(err);
           } 
            
           console.log("Запись выполнена. Пользователь добавлен"); 
           });
    }
};

module.exports = repository;








