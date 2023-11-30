
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleArea(a, b){
    let area = a * b;
    return area;
}
let a= 123;
let b= 126;
console.log(rectangleArea(a, b))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(radius) {
    let result = radius * radius * Math.PI;
    return result;
}
let x = circleSquare(13);
console.log(x);
//
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
 function cylinderArea (r,h){
    let result = 2 * Math.PI * r * h;
    return result;
 }
 let y = cylinderArea(10, 13);
console.log(y);
// - створити функцію яка приймає масив та виводить кожен його елемент
 function printerArray(array){
     for (const item of array ){
         console.log(item);
     }
 }
  let users = [1,1,3,4,5,]
  printerArray(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragrafText(text){
    document.write(`<p>${text}</p>`)
}
paragrafText(`<p>text text</p>`);
paragrafText(`jdfgj, djfdff, dfdfd`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulElements() {
    let text = arguments[0]
    document.write('<ul>');
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
        document.write(`<li>${text}</li>`)
    document.write('</ul>');
}ulElements(`Hrihorii`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liElements(text, number){
    document.write('<ul>');
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}liElements(`Grey`,`4`)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const primElement = [123,true,'trew']
function masivElements(masiv){
    document.write(`<ul>`)
    for (const masivElement of masiv) {
      document.write(`<li>${masivElement}</li>`)
    }
    document.write(`</ul>`)
}masivElements(primElement)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const userObjects =[
    {id:1, name: 'vasya', age: 31},
    {id:2, name: 'petya', age: 30},
    {id:3, name: 'kolya', age: 29},
    {id:4, name: 'olya', age: 28},
    {id:5, name: 'max', age: 30},
    {id:6, name: 'anya', age: 31}
    ];
function objectsElements(object){
    document.write(`<ul>`)
    for (let i = 0; i < object.length; i++) {
        const objectElement = object[i];
        document.write(`<div>`+`id:${objectElement.id}`+` name:${objectElement.name}`+`age:${objectElement.age}`+`</div>`)
    }
    document.write(`</ul>`)
}objectsElements(userObjects)

// - створити функцію яка повертає найменьше число з масиву
function minNumber(number1) {
    let minNumber = number1[0];
    for (let i = 1; i <number1.length; i++) {
        if (number1[i] < minNumber) {
            minNumber = number1[i]
        }
    }
    return minNumber;
}
let numbers = [34, 56, 4,6];
let min = minNumber(numbers)
console.log("найменше число :" + min)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
    }
    return sum;
}
let numbers1 = [12, 23, 45];
let result = sum (numbers1)
console.log(result);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
        let num = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = num;
    }
    return arr;
}
let numbers2 = [11, 22, 33, 44];
console.log(swap(numbers2, 0, 1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') => 250

function exchange(sumUAH, currencyValues,exchangeCurrency){
    for (let i = 0; i < currencyValues.length; i++) {
       if (currencyValues[i].currency === exchangeCurrency){
            exhange = currencyValues[i].value;
        }
        
    }return sumUAH / exhange;
}
let currencies = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];
console.log(exchange(10000, currencies, 'USD'));
