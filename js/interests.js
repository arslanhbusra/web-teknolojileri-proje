const apiKey = "8ea39cf179ae1ffbf262b2c273b05b40";

const movieListDiv = document.getElementById("movieList");
const tvListDiv = document.getElementById("tvList");
const bookListDiv = document.getElementById("bookList");
const musicListDiv = document.getElementById("musicList");

const favoriFilmIDleri = [207, 530385, 4348, 9919, 258480, 994108, 11544, 568124]; 
const favoriDiziIDleri = [1421, 48891, 70523, 61664, 4586, 66573, 32519, 43393 ];
const favoriAlbumler = ["Smoke + Mirrors", "Trench", "reputation", "Lorde Melodrama","Fine Line", "Amir Tamino", "HIT ME HARD AND SOFT","The Rise and Fall of a Midwest Princess"];
function renderCards(data, type) {
    if (!data.id) return "";

    const title = type === 'movie' ? data.title : data.name;
    const date = type === 'movie' ? data.release_date : data.first_air_date;

    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="film-card">
                <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" 
                     class="film-image" 
                     alt="${title}">
                <div class="film-content">
                    <h5 class="mt-2">${title}</h5>
                    <div class="film-rating">
                        ⭐ ${data.vote_average.toFixed(1)} 
                        <small class="text-muted">(${date ? date.split("-")[0] : "N/A"})</small>
                    </div>
                    <p class="film-overview" style="font-size: 0.9rem;">
                        ${data.overview ? data.overview.substring(0, 80) + '...' : "Açıklama bulunamadı."}
                    </p>
                </div>
            </div>
        </div>
    `;
}

document.getElementById("loadMovieBtn").addEventListener("click", function () {
    movieListDiv.innerHTML = '<div class="text-center w-100"><p>Filmler yükleniyor...</p></div>';
    
    const fetchPromises = favoriFilmIDleri.map(id => 
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=eng-ENG`).then(res => res.json())
    );

    Promise.all(fetchPromises).then(movies => {
        movieListDiv.innerHTML = movies.map(m => renderCards(m, 'movie')).join('');
    });
});

document.getElementById("loadTvBtn").addEventListener("click", function () {
    tvListDiv.innerHTML = '<div class="text-center w-100"><p>Diziler yükleniyor...</p></div>';
    
    const fetchPromises = favoriDiziIDleri.map(id => 
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=eng-ENG`).then(res => res.json())
    );

    Promise.all(fetchPromises).then(series => {
        tvListDiv.innerHTML = series.map(s => renderCards(s, 'tv')).join('');
    });
});

document.getElementById("loadMusicBtn").addEventListener("click", function () {
    musicListDiv.innerHTML = '<p class="text-center w-100">Albümler yükleniyor...</p>';
    
    const fetchPromises = favoriAlbumler.map(query => 
        fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=album&limit=1`).then(res => res.json())
    );

    Promise.all(fetchPromises).then(results => {
        musicListDiv.innerHTML = "";
        results.forEach(data => {
            if(data.results.length > 0) {
                const album = data.results[0];
                musicListDiv.innerHTML += `
                    <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div class="film-card">
                            <img src="${album.artworkUrl100.replace('100x100', '500x500')}" class="film-image" alt="${album.collectionName}">
                            <div class="film-content">
                                <h5 class="mt-2">${album.collectionName}</h5>
                                <p class="text-muted">${album.artistName}</p>
                                <p class="text-secondary">${album.primaryGenreName} (${album.releaseDate.split("-")[0]})</p>
                            </div>
                        </div>
                    </div>`;
            }
        });
    });
});