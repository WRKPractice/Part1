// 1. Выведите в консоль тип данных следующих переменных (использовать метод typeof())
let a;
let c = 9;
let str = "Hi 5!";
let b = true;
let y = 9 + "1";
let x = "a" / 6;

console.log(typeof a);
console.log(typeof c);
console.log(typeof str);
console.log(typeof b);
console.log(typeof y);
console.log(typeof x);

//2. Что выведет код и ПОЧЕМУ:
const number = 15;
const result = number + 5;
console.log(result); //20 сложение чисел

const number = "28";
const result = number + 2;
console.log(result); // 282 происходит конкатенация со строкой при знаке +

console.log(null || 2 || undefined); // || возвращает первое truthy значение

const x = 5;
const y = 10;

console.log(x > 0 && y < 20); //true оба условия истинны
console.log(x < 0 && y > 0); // false возвращает первое ложное условие
console.log(x < 0 && y < 0); // false возвращает первое ложное условие
console.log(x > 0 && "Hello"); // Hello возвращает второе условие, если оба истинны

const a = 0;
const b = "World";

console.log(a > 0 || b.length > 0); // true первое условие ложно, поэтому возвращает второе
console.log(a > 0 || b.length === 0);  // false оба условия ложны
console.log(a > 0 || ""); // "" оба условия ложны, возвращает последнее
console.log(a < 0 || "Hello"); // Hello первое условие ложно, поэтому возвращает второе

let x = 5;
let y = 10;
let z = 15;
let result = (x > y || y < z) && !(z === x);
console.log(result); // (false || true) && !(false) => true && true => true

//3. Какого типа данных будет результат выполнения оператора "typeof" для переменной "isAdult", если возраст "age" равен 18?
let age = 18;
let isAdult = age >= 18;
let typeOfIsAdult = typeof isAdult;
console.log(typeOfIsAdult); //boolean

//Темы: строка, методы строки, if-else, switch.
//1. Используя switch, напишите программу перевода дней недели из цифр в названия (перевести дни 1-7 в Пон-Вос).
const weekDay = 1;

switch (weekDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}
//2. Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”,
// то программа должна показать - “approved”, если другие месяцы, то - “denied”.
function getVacation(month) {
    switch (month) {
        case "July":
        case "August":
            return "approved";
        default:
            return "denied";
    }
}

console.log(getVacation("July"));
console.log(getVacation("December"));

//Темы: массивы, циклы for, foreach.
//1. Найти самое маленькое число из массива [4, 81, 3, -12, 99, 14].
const arr = [4, 81, 3, -12, 99, 14];

let min = arr[0];
for (const number of arr) {
    if (number < min) min = number;
}
console.log(min);

//2. Найти сумму всех элементов массива [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"]
const array = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"];

let sum = 0;
for (let el of array.flat()) {
    if (typeof el === "number") {
        sum += el;
    }
}
console.log(sum);

//3. При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//4. Нарисуйте ромб (подсказка: вложенные циклы)
// 
//   *
//  ***
// *****
//  ***
//   *
for (let i = 0; i < 5; i++) {
    let row = "";
    const spaces = Math.abs(2 - i);
    const stars = 5 - 2 * spaces;

    for (let j = 0; j < spaces; j++) {
        row += " ";
    }

    for (let j = 0; j < stars; j++) {
        row += "*";
    }
    console.log(row);
}

//Тема: функции JS.
//1. Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции).
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра,
// а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.
function countDays() {
    const wallHeight = 5;
    let position = 0;
    let days = 0;

    function climb() {
        position += 3;
    }

    function slide() {
        position -= 2;
    }

    while (position < wallHeight) {
        days++;
        climb();
        if (position >= wallHeight) return days;
        slide();
    }
    return days;
}

console.log(countDays());

//2. Напишите функцию, которая принимает массив чисел как параметр и возвращает сумму всех чисел этого массива.
// Если элемент массива не число, пропускаем этот элемент. (Решить с помощью функций filter и reduce)
function sumNumbers(arr) {
    const numbers = arr.filter(x => typeof x === "number");
    return numbers.reduce((acc, cur) => acc + cur, 0)
}

const arr = [1, 4, -3, 7, 2, 'a', true]
console.log(sumNumbers(arr));