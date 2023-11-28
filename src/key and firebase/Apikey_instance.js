//https://api.themoviedb.org/3/movie/157336?api_key=620362aa5d8cd6760f3da84c1ee566f4

import axios from "axios";

const API_KEY = '620362aa5d8cd6760f3da84c1ee566f4';
const image_url = 'https://image.tmdb.org/t/p/w500/'
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});


export {API_KEY ,instance,image_url} 