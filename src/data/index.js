import axios from "axios";

const API_KEY = "826a5ec798a85ea391a94fb7606095b9";
const BASE_AXIOS = axios.create({baseURL:"https://api.themoviedb.org/3"});

export const fetchDiscover = () => BASE_AXIOS.get(`/discover/movie?api_key=${API_KEY}&page=1`);

export const fetchTrending = (trendValue) => BASE_AXIOS.get(`/trending/movie/${trendValue}?api_key=${API_KEY}&page=2`);