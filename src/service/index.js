
import axios from 'axios';

const apiaKey = '681186281f0908c0103f6be4e5dcc22b'
const url = 'https://api.themoviedb.org/3'



// https://api.themoviedb.org/3/movie/550?api_key=681186281f0908c0103f6be4e5dcc22b

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.