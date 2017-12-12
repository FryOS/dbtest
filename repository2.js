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
                            resolve();
                        }
                        else {
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
                    resolve(console.log(result));
                }
                else {
                    
                    reject(console.log('Ошибка sql-запроса! : '+ err));
                }
            });
        });
    },
    
    deleteUser: function (name){
        var me = this;
        return new Promise(function(){
           me.db.run('delete from user_info where info = ?', [name], function(err, result){
                if (err == null) {
                    // console.log('Удалили значение');
                    resolve(console.log(result));;
                }
                else {
                    reject(console.log('Ошибка sql-запроса! : '+ err));
                }
           });
        });
    },

    addUser: function(){

    },


}

module.exports = repository2;