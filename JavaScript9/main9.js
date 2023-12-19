//1 - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let newDiv = document.createElement('div')
newDiv.innerText = 'text text'
newDiv.classList.add('wrap')
newDiv.classList.add('collapse')
newDiv.classList.add('alpha')
newDiv.classList.add('beta')
newDiv.style.background = 'red'
newDiv.style.color = 'blue'
newDiv.style.fontSize = '23px'
document.body.append(newDiv)
document.body.appendChild(newDiv)

// ===========================================================
createHr('red')
// ============================================================
// 2- Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let masiv = ['Main','Products','About us','Contacts']
let ul = document.createElement('ul')
masiv.forEach(item =>{
    let li = document.createElement('li')
   li.textContent =item
    ul.appendChild(li)
    }
    )
document.body.appendChild(ul)
// ======================================
createHr('red')
// ===========================================
// 3- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
const parentElement = document.body;
coursesAndDurationArray.forEach(course => {
    const courseDiv = document.createElement('div');
    courseDiv.textContent = `Title: ${course.title}, Duration: ${course.monthDuration} months`;
    parentElement.appendChild(courseDiv);
});
// =========================
createHr('red')
//=============================
//   4 - Є масив
let courses = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
const parentElement1 = document.body
for (const course of courses){
    let courses = document.createElement('div');
     courses.classList.add('item')

    let heading = document.createElement('h1');
    heading.classList.add('heading')
    heading.innerText =courses.title;

    let description = document.createElement('p');
    description.classList.add('description')
    description.textContent= `Duration: ${course.monthDuration} months`;

    courses.append(heading, description);
    parentElement1.appendChild(courses);
}
// =====================================================
createHr('red')
// ==========================
//
// 5- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons =[
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
const container = document.createElement('div');
container.className = 'family';
for (const member of simpsons) {
    let memberDiv = document.createElement('div')
    memberDiv.className = 'member'

    let nameHeading = document.createElement('h2')
    nameHeading.textContent = `${member.name} ${member.surname}`;

    let age  = document.createElement('p');
    age.textContent = `${member.age}`;
    let info = document.createElement('p')
    info.textContent = `${member.info}`

    const img = document.createElement('img');
    img.src = member.photo;
    img.alt = `${member.name} ${member.surname}`;


    memberDiv.appendChild(nameHeading);
    memberDiv.appendChild(age);
    memberDiv.appendChild(info);
    memberDiv.appendChild(img);
container.appendChild(memberDiv)
}
document.body.appendChild(container)
// =========================
createHr('red')
// ===========================================
//     Цикл в циклі
// 6- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
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
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
const box = document.createElement('div');
box.className = 'container'
for (const course of coursesArray){
let courseArrayDiv = document.createElement('div')
    courseArrayDiv.className = 'course';
let titleHeading = document.createElement('h2')
    titleHeading.textContent = `Title ${course.title}`

 let monthDuration  = document.createElement('p');
    monthDuration.textContent = `MonthDuration${course.monthDuration}`;
 let hourDuration = document.createElement('p')
     hourDuration.textContent = `HourDuration${course.hourDuration}`

    let modulesDiv = document.createElement('div')
    modulesDiv.className= 'modules'
    let modulesTitle = document.createElement('h3')
    modulesTitle.className = 'Modules'

    let modulesList = document.createElement('ul')
    for (const module of course.modules) {
        let moduleItem = document.createElement('li')
        moduleItem.textContent = module;
        modulesList.appendChild(moduleItem)
    }

     modulesDiv.appendChild(modulesTitle);
     modulesDiv.appendChild(modulesList);
     courseArrayDiv.appendChild(titleHeading);
     courseArrayDiv.appendChild(monthDuration);
     courseArrayDiv.appendChild(hourDuration);
     courseArrayDiv.appendChild(modulesDiv);

    box.appendChild( courseArrayDiv);
    }
document.body.appendChild(box);
// ============================================================================
    // ====================================================================
function createHr(color){
    document.write(`<hr style="border: 2px solid ${color}">`)
}