// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let myArray = [123,'hello',false,{name: 'Petro'},['laime','gren'],5565,null, undefined,NaN,true];
console.log(myArray);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
  title: "Battlegrounds",
  pageCount: "384",
  genre: "Autobiograf"
};
let book2 = {
    title: "Kobzar",
    pageCount: "500",
    genre: "Poems"
};
let book3 = {
    title: "1786",
    pageCount: "384",
    genre: "Fantazy"
};
console.log(book1, book2, book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book15 = {
    title: "Battlegrounds",
    pageCount: "384",
    genre: "Autobiograf",
    authors:[
        {name: "Herber McMaster",
             age: 46}]
};
let book20 = {
    title: "Kobzar",
    pageCount: "500",
    genre: "Poems",
    authors:[
        {name: "Taras Shevchenko",
            age: 120}]

};
let book30 = {
    title: "1786",
    pageCount: "384",
    genre: "Fantazy",
    authors:[
        {name: "piter",
            age:34}]
};
console.log(book15, book20, book30);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'vasya', username:"gren",pasword:'1234'},
    {name: 'petya', username:"yellow",pasword:'234'},
    {name: 'kolya', username:"red",pasword:'44546'},
    {name: 'olya', username:"blue",pasword:'56565'},
    {name: 'max',username:"orange",pasword:'7877'},
    {name: 'anya', username:"girl",pasword:'3535'},
    {name: 'oleg', username:"boy",pasword:'4353'},
    {name: 'andrey', username:"man",pasword:'64564'},
    {name: 'masha',username:"sister",pasword:'54645'},
    {name: 'olya', username:"buter",pasword:'54564'},
];
console.log(users[0].pasword);
console.log(users[1].pasword);
console.log(users[2].pasword);
console.log(users[3].pasword);
console.log(users[4].pasword);
console.log(users[5].pasword);
console.log(users[6].pasword);
console.log(users[7].pasword);
console.log(users[8].pasword);
console.log(users[9].pasword);
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 20;
if (x !==0){
    console.log("вірно")
}else {
    console.log("не вірно");
}
let a = 1;
if (a !== 0){
    console.log("вірно")
}else {
    console.log("не вірно");
}
let a2 = 0;
if (a2 !== 0){
    console.log("вірно")
}else {
    console.log("не вірно");
}
let a1 = -3;
if (a1 !== 0){
    console.log("вірно")
}else {
    console.log("не вірно");
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 31;
if (time >0 && time<=14){
    console.log("перша четверть");
}else if ( time >=15 && time <= 29){
    console.log("друга четверть ");
}else if (time >= 30 && time <= 44){
    console.log("третя четверть");
}else{
    console.log("четверта четверть");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 8;
if (day >0 && day<=9){
    console.log("перша декада");
}else if (day >=10 && day <= 21){
    console.log("друга декада ");
}else{
    console.log("третя декада");
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let dayNumber = +prompt();
switch (dayNumber){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("saturday");
        break;
    case 6:
        console.log("sunday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("не той день");
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let red = prompt();
let gren=prompt();
if (red > gren){
    console.log("max number: " + red);
}else if (gren > red){
    console.log("max number: " + number2)
}else{
    console.log("числа рівні: " + red + "i" + gren);
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
//         falsy (хибноподібні, тобто приводиться до false)
 let x1 = 123;
 let x2 = x1 || "default";
console.log(x2);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('syper');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('syper');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('syper');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('syper');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('syper');
}if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('syper');
}