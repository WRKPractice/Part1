/*
let a;
let c = 9;
let str = "Hi 5!";
let b = true;
let y = 9 + "1";
let x = "a" / 6
console.log(typeof a); //undef
console.log(typeof c); // num
console.log(typeof str); // str
console.log(typeof b); // bool
console.log(typeof y); // str. The "+" operator has two roles. If it sees two numbers, it performs a math operation. 
// But in this case, we have a string, so it tries to glue them into a string.
console.log(typeof x); // num. "/" has only math role so its always making number.
*//*

const number = 15;
        const result = number + 5;
        console.log(result);
// выдает 20 , берет значение из number и прабавляет 5 , консоль подхватывает готовое значение
*//*

const number2 = "28";
        const result = number2 + 2;
        console.log(result); //"282"
console.log(typeof result); // Т.к. number2 - это строка, оператор + склеивает её с числом 2.
//операция приведения типов имеет более высокий приоритет чем математическая операция, приведение выполняется первым.
*//*
console.log( null || 2 || undefined ); //2
// "||"проверяет ложное значение (false, 0, "", null/undefined) и возвращает первое истинное (если истинных нет возвращает полсденее значиение)
*//*

const x = 5;
        const y = 10;

        console.log(x > 0 && y < 20); // true. Оба условиея верны
        console.log(x < 0 && y > 0); // false. 
        // первое условие не верно
        console.log(x < 0 && y < 0);  // false. 
        // первое условие не верно(второе тоже), но оператор дальше не пойдет проверять и вернет первое ложное.
        console.log(x > 0 && "Hello");  // "Hello". 
        // Оператор && возвращает последний операнд, если все предыдущие были истинными.
*//*

//  || возвращает первый Thruly операнд, если оба falsy возращает последний.
const a = 0;
        const b = "World";
        console.log (b.length)
        console.log(a > 0 || b.length > 0); // true. первое ложно, второе истинно взовращается второе.
        console.log(a > 0 || b.length === 0); //false. оба ложные, возвращается второе.
        console.log(a > 0 || ""); // оба ложные , возвращается последнее (пустая строка).
        console.log(a < 0 || "Hello"); // первое ложное, оператор возвращает второе которое истинное (строку "Hello")
*//*
 let x = 5;
         let y = 10;
         let z = 15;
         let result = (x > y || y < z) && !(z === x);
console.log (result)// true
// (falsy || thruly) && !(делаем true из false)(z === x - Falsy)
// получаем (true) И (true)
*//*
let age = 18;
    let isAdult = age >= 18; //У нас тут операция сравнения, по результату будет bool console.log(typeof isAdult)
    let typeOfIsAdult = typeof isAdult;
    console.log(typeOfIsAdult);// boolean.
*//*

let day = 1;
let dayName;
switch (day) {
    case 1:
        dayName = "Понедельник"
        break;
    case 2:
        dayName = "Вторник"
        break;
    case 3:
        dayName = "Среда"
        break;
    case 4:
        dayName = "Четверг"
        break;
    case 5:
        dayName = "Пятница"
        break;
    case 6:
        dayName = "Сб"
        break;
    case 7:
        dayName = "Вс"
        break;
    default:
        dayName = "Неверный день недели"
}
console.log (dayName)
*//*
let month = "April";
let permission;
    switch (month) {
    case "July":
    case "August":
        permission = "approved";
        break;
    default:
        permission = "denied";
}
console.log (permission)

*//*
const arr = [4, 81, 3, -12, 99, 14]
let = minNum = arr[0]
for (let i = 1; i < arr.length; i++) {
    if (arr[i]< minNum)
    minNum = arr[i]    
}
console.log(minNum);
*/
//Найти сумму всех элементов массива [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"].

const nums = [[1, 2], [3, 4, 5], [6, 7, 8], 9, [10], [0, 11], "Hello"]
function sumNumbers(arr) {
    let sum = 0; // аккамулятор
    for (let item of arr) {
        if (Array.isArray(item)) {   //каждая итерация спрашивает массив ли
            sum += sumNumbers(item); //  после каждой итерации выбрасывает сумму наверх в sum
        } else if (typeof item === "number") { // для немассива числа 9 и строки
            sum += item; 
        }
    }
    return sum;
}
console.log(sumNumbers(nums)); // 66

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

function drawDiamond() {
    for (let i = 1; i <= 3; i++) {
        let row = "";

        for (let j = 1; j <= 3 - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }

    for (let i = 2; i >= 1; i--) {
        let row = "";

        for (let j = 1; j <= 3 - i; j++) {
            row += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        console.log(row);
    }
}
drawDiamond();

//Переделайте задачку с улиткой используя функции (подсказка - используем вложенные функции).
//Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, 
// а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.
/*
let height = 0; 
let days = 0;   

while (height < 5) {
    days = days + 1;     
    height = height + 3; 
    
    if (height >= 5) {
        break; 
    }
    height = height - 2; 
}
console.log(days);
*/
function calculatDays() {
    let height = 0; 
    let days = 0;
    function goUp() {    // за день +3
        height +=3; 
    }
    function goDown() {  // за ночь -2
        height -=2;
    }
    while (height<5) { // требуемая высота
        days +=1; // счетчик дней
        goUp();
        if (height>=5) { // проверка , если дней 5 - выходим
            break;
        }
        goDown();
    }
    return days;
}
console.log (calculatDays());

// Напишите функцию, которая принимает массив чисел как параметр и 
// возвращает сумму всех чисел этого массива. Если элемент массива не число,
//  пропускаем этот элемент. (Решить с помощью функций filter и reduce)
let rndArr = [2,30,100,"1"]
function sumOfNum(arr) {
    let numFilter = arr.filter(function(i){
        return typeof i === "number";
    });
    let numSum = numFilter.reduce(function(total , each){
        return total +each;
    }, 0);
    return numSum;
}
console.log (sumNumbers(rndArr))