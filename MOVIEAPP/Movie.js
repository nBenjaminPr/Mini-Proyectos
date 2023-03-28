//api documentation => https://developers.themoviedb.org/3/getting-started/introduction

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f83b118bbc4a7854338385824c4920cc&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f83b118bbc4a7854338385824c4920cc&query="';

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")


getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results)
}



