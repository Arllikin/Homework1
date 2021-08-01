"use strict";

let numberOfFilms;

function start() {
    numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// for (let i = 0; i < 2; i++){
//     const a = prompt("Один из последних просмотренных фильмов?"),
//         b = prompt("На сколько оцените его?");

//     if (a != null && b!=null && a!='' && b!='' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log("Ok");
//     } else {
//         i--;
//         console.log("Error");
//         continue;
//     }


// }

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?"),
            b = prompt("На сколько оцените его?");
    
        if (a != null && b!=null && a!='' && b!='' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Ok");
        } else {
            i--;
            console.log("Error");
            continue;
        }       
    }
}

// rememberMyFilms();

// if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
// } else if (personalMovieDB.count > 30) {
//     console.log("Вы киноман");
// } else {
//     console.log("Произошла ошибка");
// }

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel()

// const a = prompt("Один из последних просмотренных фильмов?"),
//  b = prompt("На сколько оцените его?");
//  c = prompt("Один из последних просмотренных фильмов?"),
//  d = prompt("На сколько оцените его?");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

// showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`);
        if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') {
            i--;
        }
    }
}

writeYourGenres();

console.log(personalMovieDB);