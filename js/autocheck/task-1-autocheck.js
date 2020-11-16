// Задача 5-1

// function-constructor

// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.

// В prototype функции-конструктора добавь метод getInfo(), который возвращает строку со значениями свойств login и email объекта.

// ***************************************************************************************************************************

// Write code under this line
const Account = function (login, email) {
  this.login = login;
  this.email = email;
};

// Перший варіант вирішення

Account.prototype.getInfo = function () {
  let string = '';
  const keys = Object.keys(this);

  for (let i = 0; i < keys.length; i += 1) {
    // if (i === 0) {
    //   string += `${keys[i]} : ${this[keys[i]]}, `;
    // } else {
    //   string += `${keys[i]}: ${this[keys[i]]}`;
    // }

    string +=
      i === 0
        ? `${keys[i]} : ${this[keys[i]]}, `
        : `${keys[i]}: ${this[keys[i]]}`;
  }

  return string;
};

// Другий варіант вирішення

// Account.prototype.getInfo = function () {
//   return `login : ${this.login}, email: ${this.email}`;
// };

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'

// https://youtu.be/VL7kNr5lLo8?t=6441

// ***************************************************************************************************************************

// Як воно повинно б було працювати

// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   let string = '';

//   const keys = Object.keys(this);

//   for (const key of keys) {
//     string += `${key}: ${this[key]}, `;
//   }

//   return string.slice(0, string.length - 2);
// };

// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'
