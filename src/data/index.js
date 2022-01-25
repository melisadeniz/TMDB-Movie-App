import axios from "axios";

const API_KEY = "826a5ec798a85ea391a94fb7606095b9";
const BASE_AXIOS = axios.create({baseURL:"https://api.themoviedb.org/3"});

export const fetchMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`);

export const fetchSeries = () => BASE_AXIOS.get(`/discover/tv?api_key=${API_KEY}&page=1`)
;