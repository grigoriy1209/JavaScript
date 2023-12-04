// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sRectang = (a, b) =>a * b
console.log(sRectang(10, 20))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sCircle = (r) =>r* r * Math.PI;
console.log(sCircle(12 ))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sCilinder = (h, r) =>2 * Math.PI * r * h;
console.log(sCilinder(13, 34 ))
document.write(sCilinder(10,21))
// - створити функцію яка приймає масив та виводить кожен його елемент
let printArray = (arr) =>{
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
printArray([12, 223,123]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let pfText = (text) => {
    document.write(`<p>${text}</p>`)
}
pfText(`<p>text text</p>`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let creatUl = (text) => {
    document.write(`<ul>
         <li>${text}</li>
         <li>${text}</li>
         <li>${text}</li>
                  </ul>`)
}
creatUl(`bla bla bla`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let creatul2 = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        const textElement = text[i];
        document.write(`<li> ${text}</li>`)
    }
   document.write (`</ul>`)
}
creatul2(`bla bla bla bla`)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let crearLi = (arr) =>{
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}
crearLi([`122`, 222, true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30}
    ];
let objArr = (arr1) => {
    for (const user of arr1) {
        document.write(`<div style="color: crimson">
           ${user.name} - ${user.id} - ${user.age}         
            </div>`)
    }
    }
objArr(users)
// - створити функцію яка повертає найменьше число з масиву
const numbers= [12, 25, 23, 12];
let minArr = (Arr) => {
    let min = Arr[0]
    for (const num of Arr) {
        if (min > num) {
            min = num
        }
    }return min;
}
document.write(minArr(numbers))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr12)=> {
    let result = 0;
    for (const num1 of arr12) {
        result += num1
    }
    return result
    }
console.log(sum([12,23,34]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) =>{
    const num= arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num;
    return arr
}
console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues,exchangeCurrency) =>{
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency){
            exhange = currencyValues[i].value;
        }

    }return sumUAH / exhange;
}
let currencies = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42}
];
console.log(exchange(10000, currencies, 'USD'));

