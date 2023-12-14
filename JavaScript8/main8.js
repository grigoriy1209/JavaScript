// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
for (let i = 0; i < 10; i++) {
    const user =new User(i+1,'petia','petrov','sdsdfdgfds@', 4454545454)
    users.push(user)
}
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let user = users.filter(user => user.id % 2===0)
console.log(user);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let user1 = users.sort(function (a,b){
    return a.id-b.id
})
console.log(user1);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [];
for (let i = 0; i < 10; i++) {
    let client = new Client(i + 1,'vasia','petrov', '@dfdgfdgdfg', 2131333133,[
        { name: `Product1`, price: 100, category: `Category1` },
        { name: `Product2`, price: 200, category: `Category2` },

    ]);
    clients.push(client);
}
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort((a, b) => a.order.length - b.order.length);
console.log(clients);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model,produser,year,maxSpeed,engine) {
    this.model = model;
    this.produser = produser;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function (){
       document.write(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
   this.info = function (){
       for (const key in this) {
           if (typeof this[key] !== 'function') {
               console.log(`${key} - ${this[key]}`);
           }
        }
      };
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
       };
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue){
        this.year= newValue
    };
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver){
        this.driver = driver
    }
}

let car = new Car('200', 'Volvo',2022,230,'4,4')
let newDriver = {
    name: 'petia',
    age: 24
}
car.addDriver(newDriver)
car.drive()
car.info()
car.increaseMaxSpeed(25)
console.log(car.year);
car.changeYear(1885);
console.log(car.year);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car1 {
    constructor(model, produser, year, maxSpeed, engine) {
        this.model = model;
        this.produser = produser;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.year = newValue;
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver (driver){
        this.driver = driver
    }

}
let car1 = new Car1('astra','opel','1988','125','1,3')
let driver={
    name:'vasia',
    age: 25.,
    category:'C'
};
car1.addDriver(driver)
car1.drive()
car1.info()
car1.increaseMaxSpeed(25)
console.log(car1.year);
car1.changeYear(1885);
console.log(car1.year);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella{
    constructor(name,age,size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let cinderellas = [
    new Cinderella('Alice', 20, 36),
    new Cinderella('Bella', 22, 38),
    new Cinderella('Clara', 25, 37),
    new Cinderella('Diana', 23, 35),
    new Cinderella('Elena', 24, 39),
    new Cinderella('Fiona', 21, 36),
    new Cinderella('Grace', 27, 38),
    new Cinderella('Hannah', 26, 37),
    new Cinderella('Ivy', 22, 35),
    new Cinderella('Julia', 28, 40)
]
console.log(cinderellas);
// function Popeliushka(name, age,size){
//     this.name =name;
//     this.age = age;
//     this.size = size;
// }
// let popeliushkas = [
//     new  Popeliushka('Alice', 20, 36),
//     new  Popeliushka('Bella', 22, 38),
//     new  Popeliushka('Clara', 25, 37),
//     new  Popeliushka('Diana', 23, 35),
//     new  Popeliushka('Elena', 24, 39),
//     new  Popeliushka('Fiona', 21, 36),
//     new  Popeliushka('Grace', 27, 38),
//     new  Popeliushka('Hannah', 26, 37),
//     new  Popeliushka('Ivy', 22, 35),
//     new  Popeliushka('Julia', 28, 40)
// ]
// console.log(popeliushkas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince{
    constructor(name, age,shoesFound) {
        this.name = name;
        this.age = age;
        this.shoesFound = shoesFound;
    }
}
let prince = new Prince('Elddar',45,35)
console.log(prince)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let sizeCinderella;
for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].size === prince.shoesFound) {
        foundCinderella = cinderellas[i];
        break;
    }
}

if (foundCinderella) {
    console.log(`Принц ${prince.name} буде з Попелюшкою ${foundCinderella.name}!`);
} else {
    console.log(`Принц ${prince.name} продовжить пошуки.`);
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// Знайти необхідну попелюшку за допомогою методу find та колбеку
let foundByFind = cinderellas.find(cinderella => cinderella.size === prince.shoesFound);

if (foundByFind) {
    console.log(`Принц ${prince.name} знайшов  ${foundByFind.name}!`);
} else {
    console.log(`Принц ${prince.name} не знайшов.`);
}