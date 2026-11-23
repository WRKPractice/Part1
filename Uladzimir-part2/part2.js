//1.

const room = {
    height: 3,
    tv: "samsung",
    big: true
};

console.log(room.height); 
console.log(room.tv);     
console.log(room.big);    

console.log(typeof room.big); 
console.log(room.tv.length); 
console.log(room.tv.length - 1);
console.log(room.tv.toUpperCase()); 
room.tv = "LG";
console.log(room.tv); 
room.furniture = ["table", "chair", "sofa"];
console.log(room.furniture[1]);

delete room.big;
console.log(room); 

//2.
function describeAnimal(animal) {
    return "This " + animal.color + " " + animal.name + " has " + animal.legs + " legs.";
}
const myDog = {name: "dog", legs: 4, color: "yellow"};
console.log(describeAnimal(myDog));

//3.
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

const mySong = new Song("123", "Uladzimir");
console.log(mySong.author);

//4.
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name; // свойства
        this.sides = sides;
        this.sideLength = sideLength;
    }
    // метод для вычисления периметра
    calcPerimeter() {
        const perimeter = this.sides * this.sideLength;
        console.log(`Perimeter ${this.name} = ${perimeter}`);
    }
}
const square = new Shape("square", 4, 5);
square.calcPerimeter(); 

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter(); 

//5. 
class Employee {
    constructor(name, age, position, salary) {
        this.name = name;         
        this._age = age;          
        this._position = position;
        this._salary = salary;
    }

    get age() {
        return this._age;
    }
    set age(newAge) {
        this._age = newAge;
    }

    get position() {
        return this._position;
    }
    set position(newPosition) {
        this._position = newPosition;
    }

    get salary() {
        return this._salary;
    }
    set salary(newSalary) {
        this._salary = newSalary;
    }
}
const worker = new Employee("Uladzimir", 25, "AQA", 1000);

console.log(worker.age);        
console.log(worker.position);   
console.log(worker.salary);     

worker.age = 27;               
worker.salary = 1500;           

console.log(worker.age);        
console.log(worker.salary);     

//6.
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

const defaultPerson = new Person();
console.log(defaultPerson.sayFullName()); 

const me = new Person("Uladzimir", "Tsimafeyeu", 25, "Male");
console.log(me.sayFullName()); 

console.log(Person.greetExtraTerrestrials("Martians"));

//ООП
//1. 

class Car {
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
}
class Zhiguli extends Car { //наследуемся
    constructor(model, color, year, place, maxSpeed) {
        super(model, color, year); 
        this.place = place;
        this.maxSpeed = maxSpeed;
    }
    nfo() {
        console.log(`Model: ${this.model}, Colour: ${this.color}, Year: ${this.year}, Place: ${this.place}, Max Speed: ${this.maxSpeed} км/ч`);
    }
}

const myZhiguli = new Zhiguli("Zhiguli", "Blue", 1991, "Moscow", 150);
myZhiguli.nfo();

//2. 
//Дополнение к задаче №2 из предыдущего домашнего задания
//Создать Square класс, который наследуется от Shape, и добавляет calcArea() 
class Square extends Shape {
    constructor(sideLength, name = "square") {
        super(name, 4, sideLength); 
    }
    calcArea() {
        const area = this.sideLength * this.sideLength; 
        console.log(`${this.name} Area : ${area}`); 
    }
}
const mySquare = new Square(10);
mySquare.calcPerimeter(); 
mySquare.calcArea();

//3. 
class Dog {
    constructor(breed, name) {
        this.breed = breed;
        this.name = name;
    }

    getFood(foodType, amount, brand) {
        // если нет еды
        if (!foodType) {
            return "All dogs love to eat!";
        }

        const food = foodType === "dry" ? "dry food" : "wet food";  // тип еды
        let myDog = `${this.breed} ${this.name} eats `;

        if (amount) { // количество
            myDog += `${amount} bowls a day of ${food}`;
        } else {
            myDog += `${food}`;
        }

        if (brand) {
            myDog += ` by ${brand}`;
        }
        return myDog;
    }
}
const dog1 = new Dog("Shepherd", "Masha");
const dog2 = new Dog("Poodle", "Demi");
const dog3 = new Dog("Corgi", "Henry");

console.log(dog1.getFood()); 
console.log(dog1.getFood("dry")); 
console.log(dog2.getFood("wet", 2)); 
console.log(dog3.getFood("dry", 3, "Royal Canin")); 

//4.

//Admin extends User 
//#password и #updatePassword() — приватные в User, Admin к ним не имеет доступа


class User {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }
    resetPassword(newPassword) {     // public
        this.#updatePassword(newPassword);
    }
    #updatePassword(newPassword) {
        this.#password = newPassword;
    }
}

class Admin extends User {
    constructor(username, password) {
        super(username, password);
        this.isAdmin = true;
    }
    deleteUser(userToDelete) { 
        return `User ${userToDelete} has been deleted.`;
    }
}

const testUser = new User("Uladzimir", "pass123");
const testAdmin = new Admin("admin", "pass123");

const result = [testUser, testAdmin];

console.log(result);

testUser.resetPassword("newPass"); 
console.log(testAdmin.deleteUser("Uladzimir")); 

//5.
class Any {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    
    getPos() { return "Any"; }
    
    // Сделал toString, иначе - [object Object]
    toString() { return this.name + " — " + this.getPos(); }
}

class Student extends Any {
    constructor(name, age, gender, course, major, gpa) {
        super(name, age, gender);
        this.course = course;
        this.major = major;
        this.gpa = gpa;
    }
    getPos() { return "Student, " + this.course + "course"; }
}

class Teacher extends Any {
    constructor(name, age, gender, salary, workHours) {
        super(name, age, gender);
        this.salary = salary;
        this.workHours = workHours;
    }
    getPos() { return "Teacher"; }
    
    getAnnual() { 
        return this.salary * 12; 
    }
}
// цепочка наследований Teacher> dean> principal
class Dean extends Teacher {
    constructor(...params){ // решил просто вбросить все параметры там всеравно не важно, фабрика все сделает
        super(...params)
    }
    getPos() { return "Dean"; }
    
    getAnnual() {
        const deanSal = this.salary * 2;
        let year = deanSal * 12;
        let bonus = deanSal;
        return year + bonus; 
    }
}

class Principal extends Dean {
    constructor(...params){
        super(...params)
    }
    
    getAnnual() {
        const dirSalary = this.salary * 2 * 1.5; 
        let year = dirSalary * 12;
        let bonus = dirSalary * 2;
        return year + bonus;
    }
    getPos() { return "Principal"; }
}
// фабрика, создает нужный конструктор по type
class buildingPpl {
    static create(type, info) {
        if (type == "student") {
            return new Student(info.name, info.age, info.gender, info.course, info.major, info.gpa);
        } 
        else if (type == "teacher") {
            return new Teacher(info.name, info.age, info.gender, info.salary, info.workHours);
        } 
        else if (type == "dean") {
            return new Dean(info.name, info.age, info.gender, info.salary, info.workHours);
        } 
        else if (type == "principal") {
            return new Principal(info.name, info.age, info.gender, info.salary, info.workHours);
        }
    }
}

class MySchool {
    constructor() { 
        this.people = []; 
    }
    addPerson(human) { 
        this.people.push(human); 
        return this; 
    }
    printAll() {
        console.log("=== School list ===");
        this.people.forEach(p => console.log(" •", p.toString()));
    }
    getDir() { // переписал под find , так как директор - один
            return this.people.find(p => p instanceof Principal);
    }
    getValedictorian() { // а тут фильтруем и ищем best.gpa
        let students = this.people.filter(std => std instanceof Student);
        return students.reduce((best, s) => { return s.gpa > best.gpa ? s : best }, students[0]); 
    }
}
// запихиваем все методы для создания школы в билдер 
class SchoolMaker {
    constructor() { 
        this.school = new MySchool(); 
    }
    addStudent(info)   { this.school.addPerson(buildingPpl.create("student", info)); return this; }
    addTeacher(info)   { this.school.addPerson(buildingPpl.create("teacher", info)); return this; }
    addDean(info)      { this.school.addPerson(buildingPpl.create("dean", info)); return this; }
    addPrincipal(info) { this.school.addPerson(buildingPpl.create("principal", info)); return this; }
    build() { return this.school; }
}
// создаем персонал
const mySchool = new SchoolMaker()
    .addPrincipal({ name: "Ula", age: 50, gender: "M", salary: 1500, workHours: 40 })
    .addDean     ({ name: "Маry", age: 45, gender: "F", salary: 2500, workHours: 36 })
    .addTeacher  ({ name: "123", age: 39, gender: "M", salary: 1500, workHours: 24 })
    .addTeacher  ({ name: "dsa", age: 35, gender: "F", salary: 1400, workHours: 20 })
    .addStudent  ({ name: "532", age: 19, gender: "M", course: 1, major: "Prog", gpa: 3.7 })
    .addStudent  ({ name: "aaaa", age: 21, gender: "F", course: 3, major: "Math", gpa: 3.95 })
    .addStudent  ({ name: "ssss", age: 20, gender: "M", course: 2, major: "Eng", gpa: 2.8 })
    .build();

mySchool.printAll();
const dir = mySchool.getDir(); 
console.log("\nAnnual Salary:", dir.getAnnual());
const best = mySchool.getValedictorian();
console.log("Best Student:", best.name, "GPA:", best.gpa);

// Error
class ValidationError extends Error { //наследуемся от Error встроеного класса
    constructor(message) {
        super(message);
        this.name = "ValidationError"; //без этого this.name = Error
    }
}
function test() { // тут создается экземпляр класса и выбрасывается
    throw new ValidationError("Whoops!");
}

try {
    test();
}   catch (customErr) { 
    console.log("message:", customErr.message);
    console.log("name:", customErr.name);
    console.log("stack:", customErr.stack); // где именно
}
