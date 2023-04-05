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

function showMovies (movies) {
    main.innerHTML= " ";

    movies.forEach((movie)=>{
        const {title, poster_path, vote_average, overview} = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML= `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class ="movie-info">
            <h3> ${title}</h3>
            <span class="${getClassByRate(vote_average)}"> 
            ${vote_average}</span> 
        </div>

        <div class="overview">
            <h3> overview </h3>
            ${overview}
            </div
        `

        main.appendChild(movieEl)
    })

};


function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green';
    } else if (vote>=5) {
        return 'orange';
    } else {
        return 'red';
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
});


const redesSociales = document.querySelectorAll('.redes-sociales a');

redesSociales.forEach((redSocial) => {
  redSocial.addEventListener('click', () => {
    window.open(redSocial.href, '_blank');
  });
});

const footer = document.querySelector('footer');

window.addEventListener('resize', () => {
    const bodyHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;    
    
if (windowHeight > bodyHeight) {
    footer.style.position = 'fixed';
    footer.style.bottom = 0;
    footer.style.left = 0;
    footer.style.right = 0;
} else {
    footer.style.position = 'static';
}
});
