// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str12 = 'hello world'
console.log(str12.length);
let str1 ='lorem ipsum';
console.log(str1.length);
let str2 ='javascript is cool';
console.log(str2.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str3 = 'hello world';
console.log(str3.toUpperCase());
let str4 ='lorem ipsum';
console.log(str4.toUpperCase())
let str5 = 'javascript is cool';
console.log(str5.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str6 = 'HELLO WORLD';
console.log(str6.toLowerCase())
let str7 ='LOREM IPSUM';
console.log(str7.toLowerCase())
let str8 ='JAVASCRIPT IS COOL';
console.log(str8.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str9 = ' dirty string   ';
console.log(str9.replaceAll('',''));
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str) {
    return str.split(' ');
}
let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let Arr = [10,8,-7,55,987,-1011,0,1050,0];
let string = Arr.map(String).join('')
console.log(string)
console.log(typeof string)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums (nums, direction){
    if (direction === 'ascending'){
        return nums.sort((a,b) => a-b);
    }else if(direction ==='descending'){
        return nums.sort((a,b)=>b-a)
    }
}
const nums = [11,21,3];
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

// ==========================
// - є масив
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration


let courseArray= coursesAndDurationArray.sort((u1,u2)=>{
    return u2.monthDuration- u1.monthDuration
    }
)
console.log(courseArray)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let courseArray1 = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(courseArray1)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
coursesAndDurationArray.map((value, index) => {
    return {id:index + 1, title:value.title, monthDuration:value.monthDuration}
    }
    )
console.log(coursesAndDurationArray)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
    { cardSuit:'spade',value:'6',color:'black'},
    { cardSuit:'spade',value:'7',color:'black'},
    { cardSuit:'spade',value:'8',color:'black'},
    { cardSuit:'spade',value:'9',color:'black'},
    { cardSuit:'spade',value:'10',color:'black'},
    { cardSuit:'spade',value:'jack',color:'black'},
    { cardSuit:'spade',value:'queen',color:'black'},
    { cardSuit:'spade',value:'king',color:'black'},
    { cardSuit:'spade',value:'ace',color:'black'},
    { cardSuit:'spade',value:'joker',color:'black'},

    { cardSuit:'diamond',value:'6',color:'red'},
    { cardSuit:'diamond',value:'7',color:'red'},
    { cardSuit:'diamond',value:'8',color:'red'},
    { cardSuit:'diamond',value:'9',color:'red'},
    { cardSuit:'diamond',value:'10',color:'red'},
    { cardSuit:'diamond',value:'jack',color:'red'},
    { cardSuit:'diamond',value:'queen',color:'red'},
    { cardSuit:'diamond',value:'king',color:'red'},
    { cardSuit:'diamond',value:'ace',color:'red'},

    { cardSuit:'heart',value:'6',color:'red'},
    { cardSuit:'heart',value:'7',color:'red'},
    { cardSuit:'heart',value:'8',color:'red'},
    { cardSuit:'heart',value:'9',color:'red'},
    { cardSuit:'heart',value:'10',color:'red'},
    { cardSuit:'heart',value:'jack',color:'red'},
    { cardSuit:'heart',value:'queen',color:'red'},
    { cardSuit:'heart',value:'king',color:'red'},
    { cardSuit:'heart',value:'ace',color:'red'},
    { cardSuit:'heart',value:'joker',color:'red'},

    { cardSuit:'clubs',value:'6',color:'black'},
    { cardSuit:'clubs',value:'7',color:'black'},
    { cardSuit:'clubs',value:'8',color:'black'},
    { cardSuit:'clubs',value:'9',color:'black'},
    { cardSuit:'clubs',value:'10',color:'black'},
    { cardSuit:'clubs',value:'jack',color:'black'},
    { cardSuit:'clubs',value:'queen',color:'black'},
    { cardSuit:'clubs',value:'king',color:'black'},
    { cardSuit:'clubs',value:'ace',color:'black'},

];
// - знайти піковий туз
let suit = cards.find(card => card.value === 'ace','spade');
console.log(suit);
// - всі шістки
function suitAll6() {
    return cards.filter(card => card.value === '6');
}
let all6 = suitAll6();
console.log(all6);
// // - всі червоні карти
function suitRed(){
    return cards.filter(card => card.color ==='red')
}
let allRed = suitRed()
console.log(allRed)
// // - всі буби
function suitDiamod(){
    return cards.filter(card => card.cardSuit ==='diamond')
}
let allDiamod = suitDiamod()
console.log(allDiamod)
// // - всі трефи від 9 та більше
function suitClubs (){
    return cards.filter( card => card.cardSuit === 'clubs' && Number (card.value) >= 9)
}
let allClubs = suitClubs()
console.log(allClubs)
// ========================================================================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]

function packCardSuit (deck) {
    return deck.reduce((packed, card) => {
        if (!packed[card.cardSuit]) {
            packed[card.cardSuit] = [];
        }
        packed[card.cardSuit].push(card);
        return packed;
    }, {});
}
let packedCard =packCardSuit(cards)
console.log(packedCard)

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
function filter (array, predicateFn){
   let filterArr = []
    for (const item of array) {
      if ( predicateFn(item)) {
          filterArr.push(item)
      }
    }
    return filterArr
}
console.log(filter(coursesArray, (value) => value.modules.includes('sass')));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(filter(coursesArray,(value)=> value.modules.includes('docker')))