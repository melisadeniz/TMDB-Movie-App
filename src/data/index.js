import axios from "axios";

const API_KEY = "826a5ec798a85ea391a94fb7606095b9";
const BASE_AXIOS = axios.create({baseURL:"https://api.themoviedb.org/3"});

export const fetchSingleMovie = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)

export const fetchSingleMovieCredits = (movieId) => BASE_AXIOS.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)

export const fetchSearchMovies = (searchValue) => BASE_AXIOS.get(`/search/movie?api_key=${API_KEY}&query=${searchValue}`);

export const fetchDiscover = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`);

export const fetchTrending = (trendValue) => BASE_AXIOS.get(`/trending/movie/${trendValue}?api_key=${API_KEY}&page=2`);

export const fetchPopular = (type, sortingValue, page, startDate, endDate, genres) => BASE_AXIOS.get(`/movie/${type}?api_key=${API_KEY}&sort_by=${sortingValue}&page=${page}&release_date.gte=${startDate}&release_date.lte=${endDate}&with_genres=${genres.toString()}`);

