var repo = require('./repository.js');

repo.init();

repo.getUsers(x => console.log(x), x => console.log('ошибочка вышла'));