/* "use strict"; */
/* console.log(1); */
/* alert("Hello Nik");
console.log(alert); */

/* const result = confirm("Are you here?");
console.log(result); */
/* const answer = +prompt("Are you 18 years old?", "18");
console.log(answer + 5); */
/* const answers = [];

answers[0] = prompt('Как дела?', 'Yes'),
answers[1] = prompt('Это новый кадилак?', 'Right'),
answers[2] = prompt('Вам есть 18 лет?', 'Yes');

console.log(answers); */
/* const category = 'toys';
/* console.log(`https://someurl.com/${category}/5`);

const user = "Nikita";

alert(`Привет, ${user}`);

console.log(2*7 == 13);

console.log(2 + 2 * 2 === 8);
console.log(2 + 2 * 2 != 8);

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose); */
/* "use strict";
/* 012 */
/* const numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ""),
      b = prompt('На сколько оцените его?', ""),
      c = prompt('Один из последних просмотренных фильмов?', ""),
      d = prompt('На сколько оцените его?', "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */ 

/* 013 */
/* if (4 == 9) {
    console.log("OK!");
}   else {
    console.log("Error");
}

const num = 50; 

if (num < 49) {
    console.log("Error");
}   else if (num > 100) {
    console.log('Много'); 
}   else {
    console.log("OK!"); */
/* } */


/* 014 */
/* let num = 50; */

/* while (num <= 55) {
    console.log(num);
    num++;
} */
/* do {
    console.log(num);
    num++;
}
while (num < 55); */

/* for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        /* break; */
       /*  continue;
    }
    console.log(i);
} 
/* 015 */

/* 016 */

"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(7, 8));
console.log(calc(50, 8));
console.log(calc(33, 8));

function ret() {
    let num = 50;

    //

    return num;

}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello")
};

logger();

const calc = (a, b) => { return a + b };

const calc = (a, b) => {
    console.log('1');
    return a + b;
};
/* 017 */

const str = "test";
const arr = [1, 2, 4];

console.log(arr.length);
*
const str = "test";

console.log(str[3]);
*
const str = "tESt";

console.log(str.toUpperCase());
*
const fruit = "Some fruit";

console.log(fruit.indexOf("i"));
*
const logg = "Hello world";

console.log(logg.slice(0, 6));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";

/* console.log(parseInt(test)); */
console.log(parseFloat(test));

"use strict";

function first() {
    // Do something

}
function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);

"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }

};
/* console.log(options.name);

delete options.name;

console.log(options); */

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }   
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    
}