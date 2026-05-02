const apiKey = "8ea39cf179ae1ffbf262b2c273b05b40";

const button = document.getElementById("loadMovieBtn");
const movieListDiv = document.getElementById("movieList");

const favoriFilmIDleri = [207, 530385, 4348, 9919, 258480, 994108, 11544, 568124]; 

button.addEventListener("click", function () {
    movieListDiv.innerHTML = '<div class="text-center w-100"><p>Favori filmler yükleniyor...</p></div>';

    const fetchPromises = favoriFilmIDleri.map(id => 
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=eng-ENG`)
        .then(res => res.json())
    );

    Promise.all(fetchPromises)
        .then(movies => {
            movieListDiv.innerHTML = "";
            
            movies.forEach(movie => {
                if (movie.id) {
                    const cardHtml = `
                        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div class="film-card">
                                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
                                     class="film-image" 
                                     alt="${movie.title}">
                                <div class="film-content">
                                    <h5>${movie.title}</h5>
                                    <div class="film-rating">
                                        ⭐ ${movie.vote_average.toFixed(1)} 
                                        <small class="text-muted">(${movie.release_date ? movie.release_date.split("-")[0] : "N/A"})</small>
                                    </div>
                                    <p class="film-overview">
                                        ${movie.overview ? movie.overview.substring(0, 100) + '...' : "Açıklama bulunamadı."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    `;
                    movieListDiv.innerHTML += cardHtml;
                }
            });
        })
        .catch(error => {
            console.error("Hata:", error);
            movieListDiv.innerHTML = '<p class="text-danger text-center">Filmler yüklenemedi, lütfen API anahtarını kontrol et.</p>';
        });
});