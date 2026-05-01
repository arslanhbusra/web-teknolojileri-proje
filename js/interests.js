const apiKey = "8ea39cf179ae1ffbf262b2c273b05b40";
const button = document.getElementById("loadMovieBtn");
const movieListDiv = document.getElementById("movieList");

const favoriFilmIDleri = [207, 530385, 4348, 9919, 258480, 994108, 11544, 568124]; 

button.addEventListener("click", function () {
    movieListDiv.innerHTML = '<div class="text-center w-100"><p>Favori filmler yükleniyor...</p></div>';

    const fetchPromises = favoriFilmIDleri.map(id => 
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=tr-TR`)
        .then(res => res.json())
    );

    Promise.all(fetchPromises)
        .then(movies => {
            movieListDiv.innerHTML = "";
            
            movies.forEach(movie => {
                if (movie.id) {
                    const cardHtml = `
                        <div class="col-md-3 mb-3">
                            <div class="card h-100 shadow-sm border-0">
                                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
                                     class="card-img-top" 
                                     alt="${movie.title}" 
                                     style="border-radius: 10px 10px 0 0;">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">${movie.title}</h5>
                                    <p class="card-text text-muted" style="font-size: 0.85rem;">
                                        <strong>Yıl:</strong> ${movie.release_date ? movie.release_date.split("-")[0] : "N/A"} | 
                                        <strong>Puan:</strong> ⭐${movie.vote_average.toFixed(1)}
                                    </p>
                                    <p class="card-text" style="font-size: 0.9rem; color: #555;">
                                        ${movie.overview ? movie.overview.substring(0, 120) + '...' : "Açıklama bulunamadı."}
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