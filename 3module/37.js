/* Задача. Получаем все зелья
Задание
Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

Тесты
Объявлена переменная atTheOldToad
Значение переменной atTheOldToad это объект
Значение свойства atTheOldToad.potions это массив ['Speed potion', 'Dragon breath', 'Stone skin']
Значение свойства atTheOldToad.getPotions это метод объекта
Вызов метода atTheOldToad.getPotions() возвращает ['Speed potion', 'Dragon breath', 'Stone skin']*/

const atTheOldToad = {
  // Change code below this line
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  // Change code above this line
  getPotions() {
    return this.potions;
  },
};