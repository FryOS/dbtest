var sqlite3 = require('sqlite3').verbose();

var repository2 = {
    db: null,
    
    init: function () {
            this.db = new sqlite3.Database('D:/Dev/dbtest/db/Data/dbtest.db'); //открытие базы для работы
        },
    
    close: function () {
            this.db.close(); //очистка ресурсов
        },
    updateUser: function (name) {
        
                var me = this;
        
                return new Promise(function (resolve, reject) {
        
                    me.db.run('update user_info set info = ? ', [name], function (err, result) {
                        if (err == null) {
                            console.log(result);
                            resolve();
                        }
                        else {
                            console.log('Ошибка sql-запроса! : '+ err);
                            reject();
                        }
                    });
                });
    },
    getUsers: function () {
        var me = this;
        
        return new Promise(function (resolve, reject) {
            me.db.all('select * from user_info', [], function (err, result) {
                if (err == null) {
                    console.log(result);
                    resolve();
                }
                else {
                    console.log('Ошибка sql-запроса! : '+ err);
                    reject();
                }
            });
        });
    },
    
    deleteUser: function (name){
        var me = this;
        return new Promise(function(resolve, reject){
           me.db.run('delete from user_info where info = ?', [name], function(err, result){
                if (err == null) {
                    console.log(result);
                    resolve();
                }
                else {
                    console.log('Ошибка sql-запроса! : '+ err);
                    reject();
                }
           });
        });
    },

    addUser: function(name){
        var me = this;
        return new Promise (function(resolve, reject){
            me.db.run('INSERT INTO user_info (info) VALUES (?)', [name], function(err, result){
                if (err == null) {
                    console.log(name);
                    resolve();
                }
                else {
                    console.log('Ошибка sql-запроса! : '+ err);
                    reject();
                }
            });
        });

    },


}

module.exports = repository2;