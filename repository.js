var sqlite3 = require('sqlite3').verbose();

var repository = {

    db: null,

    init: function () {
        this.db = new sqlite3.Database('D:/Dev/dbtest/db/Data/dbtest.db'); //открытие базы для работы
    },

    close: function () {
        this.db.close(); //очистка ресурсов
    },

    getUsers: function (ok, fail) {

        //ok - метод обратного вызова для успеха
        //fail - метод обратного вызова для ошибки

        this.db.all('select * from user_info', [], function (err, result) {
            if (err == null) {
                ok(result);
            }
            else {
                console.log('Ошибка sql-запроса!');
                fail();
            }
        });
    },

    deleteUser: function (name, ok, fail) {
        this.db.run('delete from user_info where info = ?', [name], function (err, result) {
            if (err == null) {
                console.log('Удалили значение');
                ok()
            }
            else {
                fail();
            }
        });
    },
    updateUser: function (name, ok, fail) {
        this.db.run('update user_info set info = ? ', [name], function (err, result) {
            if (err == null) {
                console.log('Обновили значение(Update)');
                ok();
            }
            else {
                console.log(err)
                console.log('Ошибка sql-запроса!');
                fail();
            }
        });
    },
    addUser: function (name, ok, fail) {
        this.db.run( 'INSERT INTO user_info (info) VALUES (?) )', [name], function(err, result){
                if (err == null) {
                    console.log('Запись выполнена. Пользователь добавлен');
                    ok();
                } else {
                    console.log('Ошибка sql-запроса!');
                    console.log(err);
                    fail();
                }
        });
    }
    
};

module.exports = repository;








