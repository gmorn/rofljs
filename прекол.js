const  numberOfFilms = prompt( 'Один из последних просмотренных фильмов?', '');
const personalMovieDB ={
    count : numberOfFilms,
    muvies:{},
    actors:{},
    generes:{},
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов')
      b = prompt( 'На сколько оцените его?')
      c = prompt('Один из последних просмотренных фильмов')
      d = prompt( 'На сколько оцените его?')

      personalMovieDB.muvies [a]=b;
       personalMovieDB.muvies [c]=d;
console.log(personalMovieDB)