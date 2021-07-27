"use sctrict";

let numberOfFilms;

numberOfFilms=prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let lastMovie = prompt("Один из последних просмотренных фильмов?");
let rating = prompt("На сколько оцените его?");

personalMovieDB.movies = `${lastMovie}: ${rating}`;

console.log(personalMovieDB.movies);