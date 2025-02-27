//"use strict";

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
// Примеры:
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

function calculateVolumeAndArea(lenghtCube) {
    // let lenghtCube = 5.5;
    // console.log(Number.isInteger(lenghtCube));

    if (typeof(lenghtCube) != 'number' || Number.isInteger(lenghtCube) != true || lenghtCube < 0 ) { 
        console.log("При вычислении произошла ошибка");
        return;
    }

    let vCube = lenghtCube * lenghtCube * lenghtCube;
    let sCube = 6 * lenghtCube * lenghtCube;
    console.log(`Объем куба: ${vCube}, площадь всей поверхности: ${sCube}`);
}

//calculateVolumeAndArea(5);
calculateVolumeAndArea();

// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
// Пример:
// getCoupeNumber(33)  => 9
// getCoupeNumber(7)  => 2
// getCoupeNumber(300)  => "Таких мест в вагоне не существует"
// getCoupeNumber(0)  => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"



function getCoupeNumber(num) {
    if (Number.isInteger(num) == false || typeof(num) != "number" || num < 0) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
        return("Ошибка. Проверьте правильность введенного номера места");
    }
    if ( num > 36 || num == 0 ) {
        console.log("Таких мест в вагоне не существует");
        return("Таких мест в вагоне не существует");
    }
    let vagon = Math.ceil(num / 4);
    return(vagon);
}
getCoupeNumber('heello');


// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(min) {
    if (Number.isInteger(min) == false || typeof(min) != "number" || min < 0) {
        console.log("Ошибка, проверьте данные");
        return("Ошибка, проверьте данные");
    }

    let h = Math.floor(min / 60);
    let m = Math.floor(min % 60);

    let hT = "";

    switch (h) {
        case 0: hT="часов"; break;
        case 1: hT="час";   break;
        case 2: hT="часа"; break;
        case 3: hT="часа"; break;
        case 4: hT="часа"; break;
        default: hT = 'часов';
    }

    console.log(`Это ${h} ${hT} и ${m} минут`);
    return(`Это ${h} ${hT} и ${m} минут`);
}
getTimeFromMinutes(180);


// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
//Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0



// Место для второй задачи
function findMaxNumber(a,b,c,d) {
    if (typeof(a) !== "number" ||
        typeof(b) !== "number" ||
        typeof(c) !== "number" ||
        typeof(d) !== "number") {
        return 0;
    } else {
         console.log('Math.max(a,b,c,d)', Math.max(a,b,c,d));
         return(Math.max(a,b,c,d));
    }
}

// Это одна из классических задач в программировании на самых разных языках. Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. И на собеседованиях часто дают задачи, связанные с этими числами. Есть разные вариации и тут мы попробуем решить одну из них.
// Сразу скажу, что есть варианты решения через прием, называемый рекурсия. Он дальше по курсу. Но этот вариант нужно решить без её применения. Такие условия часто ставят на собеседованиях. Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому. Так же подсказку (но не решение этой задачи) можно найти тут. Но постарайтесь не открывать 🙂
// Задача:
// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"

function fib(int) {
    const fibArray = [0, 1];
      let result = "";
    if (int == 1) {
        // console.log("0") ;
        result = "0";
        return result;   
    }
    if (typeof(int) !== 'number' || int === 0 || !Number.isInteger(int) ){
        // console.log("blank space");
        result = "";
        return result;    
    }
    else {
        for (let i = 2; i < int; i++) {
            fibArray[i] = fibArray[i-1]+fibArray[i-2];
        }
        for (let k = 0; k < int; k++) {
            result += " "+fibArray[k]; 
        }
        // console.log('result =', "|"+result.trim()+"|");
        return(result.trim());
    }
}
fib(7.2);

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример: showExperience(personalPlanPeter) => '1 month'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
             js: '20%',
             php: '10%',
             dlphi: "90%"
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let {age} = plan;
        let {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;
        languages.forEach(function(lang) {
            
            str += `${lang.toUpperCase()} `;
        
        });
        console.log(str);
    return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

//showExperience(personalPlanPeter);

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  => "Язык js изучен на 20% Язык php изучен на 10%"

function showProgrammingLangs(plan) {
    let str = "";
    
    const {programmingLangs} = plan.skills;
    if (Object.keys(personalPlanPeter.skills.programmingLangs).length == 0) {console.log(0); return 0;}
    
    for (let key in programmingLangs) {
       str +=  `Язык ${key} изучен на ${programmingLangs[key]}\n`;
       
    }
    console.log(str);
    return str;
        
}
    
   // showProgrammingLangs(personalPlanPeter);

   personalPlanPeter.showAgeAndLangs(personalPlanPeter);


// Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.


// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = "";
    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: '; 

    arr.forEach(member => {
        str += `${member} `;
    });
    console.log(str);
    return str;
} 

showFamily(family);


// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  arr.forEach(item => {
    console.log(item.toLowerCase());
});  
}

standardizeStrings(favoriteCities);



// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

// Может показать сложной с первого взгляда, но это совсем не так 🙂

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    console.log(str.split('').reverse().join(''));
    //return str.split('').reverse().join('');
}

reverse(someString);


// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
    arr.forEach(curr => {
       if (curr !== missingCurr) {
        str += `${curr}\n`;
        }
    });
  console.log(str);
  return str;
}

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂
// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};
//console.log("===", shoppingMallData.shops[0].width, shoppingMallData.shops[0].length);

function isBudgetEnough(data) {
    let result = 0;
 //   for (let i = 0; i < data.shops.length;i++) {
       data.shops.forEach((__, i) =>{

        
       result +=data.shops[i].width * data.shops[i].length;
    });
    result = result*5*data.moneyPer1m3;
    // if (result < data.budget) {
    //     console.log("Бюджета достаточно");
    // } else {
    //     console.log("Бюджета недостаточно");
    // }
    (result < data.budget) ? console.log("Бюджета достаточно") : console.log("Бюджета недостаточно");
}

isBudgetEnough(shoppingMallData);

// У вас есть список учеников, которые хотят поиграть в игру:
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
// Пример:
// sortStudentsByGroups(students)  =>
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:
// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'noname'];

function sortStudentsByGroups(arr) {
   //console.log(arr.sort());
    arr = arr.sort();
    let group = [];
    for (let i = 0; i < students.length; i+=3) {
        // console.log (arr[10]);
        // return;
        if (arr[i+1] === undefined) {console.log(`Оставшиеся студенты: ${arr[i]}`);return;}
        if (arr[i+2] === undefined) {console.log(`Оставшиеся студенты: ${arr[i]}, ${arr[i+1]} `);return;}
        
            group[0] = arr[i];
            group[1] = arr[i+1];
            group[2] = arr[i+2];
        console.log(group);
        //return
    }
    console.log(`Оставшиеся студенты: -`);
}
sortStudentsByGroups(students);


////////////////////////////////////////////////////////////////
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let {price} = restorantData.openNow;
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

//console.log(isOpen(openNow));


//////////////////////////////////////////////////
function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+parseInt(fDish.price) + (parseInt(sDish.price)) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

//console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.

// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = {name: 'Mike', age: 32};
    return copy;
}

console.log(transferWaitors(restorantData));



////////////////////////////////////////////////////////
// Здесь мы с вами рассмотрим одну из классических задач на рекурсию, которую дают на собеседованиях. Звучит она очень просто:
// Напишите функцию, которая вычисляет факториал.
// Задание простое, но нужно понимать что такое факториал вообще. Факториал  – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1.
// Сам же факториал с примерами выглядит вот так:
// n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула
// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// То есть, вызов нашей функции factorial(5) возвращает число 120
// factorial(4) => 24
// Решить задачу нужно через рекурсию.
///////////////////////////////////////////////////////////////

function factorial(num) {
  //  console.log(Number.isInteger(num));
   // return
    if (Number.isInteger(num) != true) {
        return "not a value";
    }
    if (num <= 1 ) {
        return 1;
    } else {
        num *= factorial(num - 1);
        return num;
    }
    
}

console.log(factorial(5)); 
//////////////////////////////////////////



function digitalRoot(n) {
    //let n1 = +n.toString()[0];
    //let n2 = +n.toString()[1];
    let res = 0;
    let text =  n.toString(10).split('').map(int => parseInt(int, 10));
   // console.log(text);
    for (let i = 0; i < n.length-1; i++) {
        //console.log(text[i]);
        text += text[i];
    }
    
    //res = n1 + n2;
   

    return text;
  }

  console.log(digitalRoot(942));


  const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];



function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}


//console.log(showGoodFilms(films));



function showListOfFilms(arr) {
   return arr.map(film => film.name)
    .reduce((prev,current) => `${prev}, ${current}`)
}

//console.log(showListOfFilms(films));



function setFilmsIds(arr) {
return arr.map((film, i) => {
    film.id = i;
    return film;
});
}

//console.log(setFilmsIds(films));


const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
   return arr.every(value => typeof(value.id) === 'number');

}

console.log(checkFilms(tranformedArray));


function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}


const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.filter(value => value.amount > 0).map(item => item.amount)
    .reduce((sum, cur) => sum + cur);
};

//console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    let x = data.some(value => value.amount < 0);
    if (x === true) {
        return data.map(item => item.amount).reduce((sum, cur) => sum + cur)
    } else return getPositiveIncomeAmount(funds)
};

console.log(getTotalIncomeAmount(funds));