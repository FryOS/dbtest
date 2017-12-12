var repo = require('./repository.js');
var repo2 = require('./repository2.js');

repo2.init();

// repo.getUsers(x => console.log(x), x => console.log('ошибочка вышла'));
// repo.deleteUser('Alexey', () => console.log("Успешно удалено"), x => console.log('ошибочка вышла'));
// repo.getUsers(x => console.log(x), x => console.log('ошибочка вышла'));
// repo.getUsers(x => console.log(x), x => console.log('ошибочка вышла'));
// repo.addUser('AlexeyOSP', () => console.log("Успешно удалено"), x => console.log('ошибочка вышла'));
// repo.updateUser ('12313', () => console.log("Успешно удалено"), x => console.log('ошибочка вышла'));


// repo2.updateUser('GYU').then(x => 'Обновлено', x => "ошибочка");

repo2.deleteUser('GYU').then((x) => console.log("Успешно удалено"), x => console.log('ошибочка вышла'));
repo2.getUsers().then(() => console.log("Вот ваши данные"), x => console.log('ошибочка вышла'));