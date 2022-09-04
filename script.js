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
console.log(`https://someurl.com/${category}/5`);

const user = "Nikita";

alert(`Привет, ${user}`);

console.log(2*7 == 13);

console.log(2 + 2 * 2 === 8);
console.log(2 + 2 * 2 != 8);

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose); */
"use strict";
const numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

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

console.log(personalMovieDB);