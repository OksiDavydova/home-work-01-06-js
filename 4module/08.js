/*Метод apply
Метод apply это аналог метода call за исключением того, что синтаксис передачи аргументов требует не перечисление, а массив, даже если аргумент всего один.

foo.call(obj, arg1, arg2, ...)

foo.apply(obj, [arg1, arg2, ...])
Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст элементы массива как отдельные аргументы arg1, arg2 и т. д. На практике, в основном используется метод call.

function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = { username: "Манго" };
const poly = { username: "Поли" };

greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго.
greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.
Задание
Выполни рефакторинг кода так, чтобы функция composeMessage(position) вызывалась методом apply.

Тесты
Объявлена переменная orders.
Значение переменной orders это исходный массив объектов-заказов.
Объявлена функция composeMessage(position).
У функции composeMessage объявлен один параметр position.
В теле функции composeMessage используется this.
Функция composeMessage вызывается методом apply.
Объявлена переменная messages.
Значение переменной messages это массив ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.']. */

const orders = [
  { email: "solomon@topmail.ua", dish: "Burger" },
  { email: "artemis@coldmail.net", dish: "Pizza" },
  { email: "jacob@mail.com", dish: "Taco" },
];

// Пиши код ниже этой строки
function composeMessage(position) {
  return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
}

const messages = [];
for (let i = 0; i < orders.length; i++) {
  const msg = composeMessage.apply(orders[i], [i + 1]);
  messages.push(msg);
}