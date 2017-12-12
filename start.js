var repo = require('./repository.js');

repo.init();

// repo.getUsers(x => console.log(x), x => console.log('ошибочка вышла'));
// repo.deleteUser('Alexey', () => console.log("Успешно удалено"), x => console.log('ошибочка вышла'));
// repo.getUsers(x => console.log(x), x => console.log('ошибочка вышла'));
//repo.getUsers(x => console.log(x), x => console.log('ошибочка вышла'));
repo.addUser('AlexeyOSP', () => console.log("Успешно удалено"), x => console.log('ошибочка вышла'));