/*Длина строки
Для того чтобы узнать длину строки, то есть количество её символов, у строк есть встроенное свойство length, значение которого можно получить обратившить к нему через точку после имени переменной или строкового литерала.

const productName = "Repair droid";

// Если в переменной хранится строка
console.log(productName.length); // 12

// Если строковый литерал
console.log("Repair droid".length); // 12
Задание
Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name. */

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}