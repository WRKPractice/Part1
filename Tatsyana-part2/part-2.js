/*
Тема: объекты
Задачки:

1. Работа с объектом room. Выполняйте пошагово.
    а. Создайте объект room и его параметры:
        	ключ height со значением 3
        	ключ tv со значением samsung
        	ключ big со значением true
    b. Выведите в console все параметры объекта room по очереди
    c. Выведите в console тип данных параметра big
    d. Выведите в console количество символов в строке параметра tv (длину строки)
    e. Выведите в console результат расчёта: длина строки параметра tv минус 1
    f. Поменяйте samsung на все заглавные буквы и выведите в console.
    g. Замените samsung на LG в нашем объекте room
    h. Добавьте в наш объект room ещё одну пару ключ-значение:
        ключ furniture, значение - массив из 3 строк: "table", "chair", "sofa"
    i. выведите chair в console (путем обращения к массиву)
    j. Удалите из нашего объекта room параметр big
*/

const room = {
    height: 3,
    tv: 'samsung',
    big: true
}
console.log(room.height, room.tv, room.big);
console.log(typeof room.big);
console.log(room.tv.length);
console.log(room.tv.length - 1);
room.tv = room.tv.toUpperCase();
console.log(room.tv);
room.tv = 'LG';
room.furniture = ["table", "chair", "sofa"];
console.log(room.furniture[1]);
delete room.big;

//2. Создайте функцию, которая принимает следующий объект как параметр: {name: "dog", legs: 4, color: "yellow"}
//   Возвратите строку: "This yellow dog has 4 legs."

function describeAnimal({name, legs, color}) {
    return `This ${color} ${name} has ${legs} legs.`;
}

console.log(describeAnimal({name: "dog", legs: 4, color: "yellow"}));

/*
Тема: классы.
Задачки:

1. Есть класс Song. Выведите на печать автора песни.
    */
class Song {
    constructor(name, author) {
        this._name = name;
        this._author = author;
    }

    get author() {
        return this._author;
    }

    set author(writer) {
        this._author = writer;
    }
}

const song = new Song('Hello', 'Adele');
console.log(song.author);

/*
2. Определите класс Shape.
   - Он имеет три свойства: name, sides, и sideLength.
   - Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину,
       например квадрат или равносторонний треугольник.
   - Добавьте конструктор в этот класс.
   - Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
   - Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр
       (длину внешнего края фигуры) и записывает результат в консоль.
   - Создайте новый экземпляр класса Shape с именем square.
   - Дайте name ему square, sides = 4 и sideLength = 5​
   - Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить,
       записывает ли он результаты вычислений в консоль браузера, как ожидалось.
   - Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
   - Вызовите triangle.calcPerimeter(), чтобы убедиться, что все работает.
 */
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        console.log(this.sides * this.sideLength);
    }
}

const square = new Shape('square', 4, 5);
square.calcPerimeter();
const triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();

/*
3. Создайте класс "Employee", представляющий работника. У работника должны быть следующие свойства:
  1. "name" - строка, представляющая имя работника.
  2. "age" - число, представляющее возраст работника.
  3. "position" - строка, представляющая должность работника.
  4. "salary" - число, представляющее зарплату работника.

  Требования:
  1. Создайте конструктор класса "Employee", который принимает аргументы
      "name", "age", "position", "salary" и инициализирует соответствующие свойства объекта.
  2. Создайте геттеры и сеттеры для свойств "age", "position" и "salary".
  3. Геттеры должны возвращать значения свойств, а сеттеры должны устанавливать
      новые значения свойств.
*/
class Employee {
    constructor(name, age, position, salary) {
        this._name = name;
        this._age = age;
        this._position = position;
        this._salary = salary;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    get position() {
        return this._position;
    }

    set position(position) {
        this._position = position;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }
}

/*
4. Создайте класс Person со следующими свойствами:
  a. Конструктор который принимает 4 аргумента:
      - First Name (по умолчанию значение "John")
      - Last Name (по умолчанию значение "Doe")
      - Age (по умолчанию значение 0)
      - Gender (по умолчанию значение "Male").

  b. Метод sayFullName без аргументов и возвращает полное имя человека
  c. Статический метод greetExtraTerrestrials который принимает один аргумент, raceName
      и возвращает "Welcome to Planet Earth <raceName>".

      Пример: если значение raceName "Martians", результат должен быть
      "Welcome to Planet Earth Martians"
*/

class Person {
    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }
}

const person = new Person(30);
console.log(person.sayFullName());
console.log(Person.greetExtraTerrestrials('Martians'));

/*
Тема: ООП
Задачки:
1. Создать класс Машина со свойствами Модель, Цвет и Год выпуска.
Создать класс Жигули, который наследует от класса Машина.
Класс Жигули имеет свойства Место выпуска и Максимальная скорость. Вывести на печать всю информацию о Жигулях.
 */

class Car {
    constructor(model, color, productionYear) {
        this.model = model;
        this.color = color;
        this.productionYear = productionYear;
    }
}

class Zhiguli extends Car {
    constructor(model, color, productionYear, productionPlace, maxSpeed) {
        super(model, color, productionYear);
        this.productionPlace = productionPlace;
        this.maxSpeed = maxSpeed;
    }
}

const zhiguli = new Zhiguli(2101, 'white', 1970, 'Moscow', 140);
console.log(zhiguli);

/*
2. Дополнение к задаче №2 из предыдущего домашнего задания
Создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, вычисляющий площадь квадрата.
Настройте конструктор экземпляров объекта Square так, чтобы свойству name автоматически присваивалось значение square,
а sides для свойства автоматически устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто
предоставить свойство sideLength.
Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств, и вызовите его методы
calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.
*/
class Square extends Shape {
    constructor(sideLength) {
        super("square", 4, sideLength);
    }

    calcArea() {
        console.log(this.sideLength ** 2);
    }
}

const square2 = new Square(3);
square2.calcArea();
square2.calcPerimeter();

/*
3. Создать метод getFood, который может принимать аргумент foodType (сухая или консервная).
Переписать метод так чтобы он мог также принимать аргументы количество и/или бренд.  Вывести на печать следующие фразы:
Метод без аргументов: "All dogs love to eat!"
Метод с foodType: "Shepherd Masha eats dry food."
Метод с foodType и количеством: "Poodle Demi eats 2 bowls a day of wet food."
Метод с foodType, количеством и брендом: "Corgi Henry eats 3 bowls a day of dry food by Royаl Canin."
*/
class Dog {
    constructor(breed, name) {
        this.breed = breed;
        this.name = name;
    }

    getFood(foodType, quantity, brand) {
        if (foodType && quantity && brand) {
            console.log(`${this.breed} ${this.name} eats ${quantity} bowls a day of ${foodType} food by ${brand}.`);
        } else if (foodType && quantity) {
            console.log(`${this.breed} ${this.name} eats ${quantity} bowls a day of ${foodType} food.`)
        } else if (foodType) {
            console.log(`${this.breed} ${this.name} eats ${foodType} food.`)
        } else {
            console.log("All dogs love to eat!");
        }
    }
}

const masha = new Dog('Shepherd', 'Masha');
const demi = new Dog('Poodle', 'Demi');
const henry = new Dog('Corgi', 'Henry');

masha.getFood();
masha.getFood('dry');
demi.getFood('wet', 2);
henry.getFood('dry', 3, 'Royаl Canin');

/*
Создать классы пользователя и администратора
В этом задании мы будем использовать приватные свойства, чтобы скрыть определенные значения и предотвратить прямой доступ к ним.
Приватные свойства могут быть доступны только внутри объявления класса.
Мы обозначаем частную переменную или функцию символом решетки (#).
Например, если бы у нас был класс Person с номером социального
страхования и функцией для расчета их налоговой категории, мы бы не
обязательно хотели, чтобы эта информация была общедоступной. Поэтому мы можем сделать эти поля приватными, как в примере ниже:

class Person {
    #socialSecurityNumber;

    #calculateTaxBracket() {
    }
}

Ваша задача:
Создайте классы User и Admin. Класс Admin расширяет класс User. Класс User имеет закрытую функцию updatePassword() и
публичную функцию resetPassword(). Класс Admin имеет публичную функцию deleteUser().

Параметры для класса User
    username: String
    (private) password: String

Параметры для класса Admin
    username: String
    (private) password: String

Свойства класса Admin
Следующие свойства также должны быть добавлены в класс Admin. Они не являются параметрами.
    isAdmin = true;

Функции класса User
resetPassword(newPassword)
Вызывает закрытую функцию updatePassword с новым паролем.

updatePassword(newPassword)
Устанавливает пароль пользователя на newPassword. Это частная функция.

Функции класса Admin
deleteUser(userToDelete): Принимает строку userToDelete и возвращает строковое сообщение: "Пользователь [userToDelete] был удален."

Результат
[testUser, testAdmin]: Массив, содержащий экземпляр класса User и экземпляр класса Admin

Ограничения
Пароль должен быть частной переменной
updatePassword должен быть частной функцией
Вы должны использовать ключевое слово extends для создания связи между пользователем и администратором.
 */

class User {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    #updatePassword(newPassword) {
        this.#password = newPassword;
    }

    resetPassword(newPassword) {
        this.#updatePassword(newPassword);
    }
}

class Admin extends User {
    isAdmin = true;

    deleteUser(userToDelete) {
        return `Пользователь ${userToDelete} был удален.`
    }
}

const user = new User('testUser', '1111');
const admin = new Admin('testAdmin', '1234');
const result = [user, admin];
console.log(result);

/*
5. Креативное задание. Создать структуру школы.
В школе есть люди, студенты, учителя, декан, директор школы.
У каждого свои свойства, некоторые повторяющиеся, как например имя, возраст, пол, можно больше.
Но так же есть и не повторяющиеся, например,
студенты - номер курса (1-ый год, 2-й год, и т.д.)
студенты - специальность (major)
студенты - средний бал (gpa, от 1 до 4, 1 - студент плохо учиться, 4 - очень хорошо)
учителя - имеют зарплату
декан - зарплата в 2 раза больше чем у учителей, плюс годовой бонус в размере 1 зарплаты
учитель и декан - часы работы
директор школы - зарплата в 1.5 раза больше чем у декана, плюс годовой бонус в размере 2х зарплат
Использовать 4 принципа ООП
Вывести на печать имена и позицию каждого человека
Вывести на печать зарплату директора школы
Вывести на печать имя студента valedictorian (лучший студент школы, студент с лучшим gpa).
 */

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getPosition() {
        return 'person';
    }

    printInfo() {
        console.log(`This is the ${this.getPosition()} ${this.name}. ${this.gender === 'm' ? 'He' : 'She'} is ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, gender, year, major, gpa) {
        super(name, age, gender);
        this.year = year;
        this.major = major;
        this.gpa = gpa;
    }

    getPosition() {
        return 'student';
    }
}

class Teacher extends Person {
    static #baseSalary = 1000;

    constructor(name, age, gender, workingHours) {
        super(name, age, gender);
        this.workingHours = workingHours;
    }

    getPosition() {
        return 'teacher';
    }

    getSalary() {
        return Teacher.#baseSalary;
    }

    static setBaseSalary(newSalary) {
        Teacher.#baseSalary = newSalary;
    }
}

class Dean extends Teacher {
    constructor(name, age, gender, workingHours) {
        super(name, age, gender, workingHours);
    }

    getPosition() {
        return 'dean';
    }

    getSalary() {
        return super.getSalary() * 2;
    }

    getAnnualSalaryWithBonus() {
        return this.getSalary() * 12 + this.getSalary();
    }
}

class HeadOfSchool extends Dean {
    constructor(name, age, gender, workingHours) {
        super(name, age, gender, workingHours);
    }

    getPosition() {
        return 'head of school';
    }

    getSalary() {
        return super.getSalary() * 1.5;
    }

    getAnnualSalaryWithBonus() {
        return this.getSalary() * 12 + this.getSalary() * 2;
    }
}

const teacher = new Teacher('Alex Grey', 33, 'm', 40);
const dean = new Dean('Edward Bom', 45, 'm', 40);
const headOfSchool = new HeadOfSchool('Bob White', 45, 'm', 40);
const student = new Student("Anna", 20, "f", 2, "IT", 3.8);
const student1 = new Student("Max", 18, "m", 4, "Sport", 4);
const student2 = new Student("Mary", 19, "f", 3, "Economics", 3);
const student3 = new Student("Kate", 20, "f", 1, "IT", 3.5);
const students = [student, student1, student2, student3];

teacher.printInfo();
dean.printInfo();
headOfSchool.printInfo();
for (let student of students) {
    student.printInfo();
}

console.log(`The head of school's monthly salary is ${headOfSchool.getSalary()}.`);
console.log(`The head of school's annual salary is ${headOfSchool.getAnnualSalaryWithBonus()}.`);

function printValedictorian(students) {
    let bestStudent = students[0];
    for (let student of students) {
        if (student.gpa > bestStudent.gpa) {
            bestStudent = student;
        }
    }
    console.log(`The valedictorian is ${bestStudent.name}.`);
}

printValedictorian(students);

/*
Тема: Error
Напишите базовый класс для пользовательских ошибок и проверьте его перехват.
Требования к коду
Создать класс ValidationError (наследуется от встроенного Error).
В конструкторе принять текст ошибки, передать его в super() и жестко задать свойство this.name = "ValidationError".
Написать функцию test(), которая генерирует (throw) эту ошибку с сообщением "Whoops!".
Вызвать функцию test() внутри блока try..catch.
В блоке catch вывести на экран три свойства пойманного исключения: message, name и stack.
 */

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

const test = () => {
    throw new ValidationError('Whoops!');
}

try {
    test();
} catch (error) {
    console.log(error.message);
    console.log(error.name);
    console.log(error.stack);
}