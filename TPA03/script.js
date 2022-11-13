// List Movie
let containerMovies = document.querySelector('#list-movie');
let getListMovies = async (query) => { // parameter query dari search
  let response = await fetch(
    query ||
      'https://api.themoviedb.org/3/discover/movie?api_key=6498a2ab00dfbdea32609eec6bc9f04b&sort_by=popularity.desc'
  ); // kalau ada query pake query kalau gak pake yang default
  let movies = await response.json();

  let movieData = movies.results;
  containerMovies.innerHTML = ''; // kosongin dulu html nya sebelum di render ulang
  movieData.slice(0, 18).forEach((item) => {
    containerMovies.innerHTML += `<div class="col">
        <div class="card m-5 border-info" style="width: 16rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="poster film ${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.original_title}</h5>
                    <h5 class="card-title">${item.vote_average}</h5>
                    <p class="card-text">${item.release_date}</p>
                </div>
          </div>`;
  });
};

getListMovies();

// search Movie

let form = document.getElementsByClassName('my-form')[0]; // ngambil form di index ke-0
let search = document.getElementById('search');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let searchTerm = search.value;
  if (searchTerm) {
    getListMovies(
      `https://api.themoviedb.org/3/search/movie?api_key=6498a2ab00dfbdea32609eec6bc9f04b&query=${searchTerm}&page=1`
    ); // kalau ada search kirim ke getList pake argumen
  } else {
    getListMovies(); // kalau ga ada search jalanin default get
  }
});