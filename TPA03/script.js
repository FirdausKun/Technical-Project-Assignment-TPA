let containerMovies = document.getElementById("list-movie")
let getListMovie = async()=>{
    let response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=6498a2ab00dfbdea32609eec6bc9f04b&sort_by=popularity.desc")
    let movies = await response.json()

    let movieData = movies.results
    movieData.slice(0,18).forEach(item=> {
        containerMovies.innerHTML +=
        `<div class="col">
        <div class="card m-5 border-info" style="width: 14rem;">
                <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" class="card-img-top" alt="poster film ${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.original_title}</h5>
                    <h5 class="card-title">${item.vote_average}</h5>
                    <p class="card-text">${item.release_date}</p>
                </div>
          </div>`
    });
}
getListMovie()