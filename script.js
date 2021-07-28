"use strict";

let numberOfFilms;

do {
numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?");
}
while (numberOfFilms.length > 0 && numberOfFilms.length < 51);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i<2; i++){
    do {
    const a = prompt("Один из последних просмотренных фильмов?");
    }
    while (a.length > 0 && a.length < 51);
    do {
    personalMovieDB.movies[a] = prompt("На сколько оцените его?");
    }
    while (personalMovieDB.movies[a].length > 0 && personalMovieDB.movies[a].length < 51);
}

// const a = prompt("Один из последних просмотренных фильмов?"),
//  b = prompt("На сколько оцените его?");
//  c = prompt("Один из последних просмотренных фильмов?"),
//  d = prompt("На сколько оцените его?");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);