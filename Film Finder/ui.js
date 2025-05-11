const resultsContainer = document.getElementById("results");

export const renderMovies = (movies) => {
    resultsContainer.innerHTML = "";

    if(movies.length === 0){
        return;
    }

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        const moviePoster = document.createElement("div");
        moviePoster.classList.add("movie-poster"); 

        const posterImg = document.createElement("img");
        posterImg.src = movie.Poster === "N/A" 
        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" : movie.Poster;
        posterImg.alt = movie.Title;

        moviePoster.appendChild(posterImg);

        const movieInfo = document.createElement("div");
        movieInfo.classList.add("movie-info"); 

        const movieTitle = document.createElement("h2");
        movieTitle.classList.add("movie-title");
        movieTitle.textContent = movie.Title;

        const movieYear = document.createElement("p");
        movieYear.classList.add("movie-year");
        movieYear.textContent = `Year: ${movie.Year}`;

        const movieType = document.createElement("p");
        movieType.classList.add("movie-type");
        movieType.textContent = `Type: ${movie.Type}`;

        const movieId = document.createElement("p");
        movieId.classList.add("movie-id");
        movieId.textContent = `IMDB Id: ${movie.imdbID}`;
    
        movieInfo.appendChild(movieTitle);
        movieInfo.appendChild(movieYear);
        movieInfo.appendChild(movieType);
        movieInfo.appendChild(movieId);

        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieInfo);

        resultsContainer.appendChild(movieCard);        
    })
};

export const showError = (message) => {
    resultsContainer.innerHTML = "";
    resultsContainer.textContent = `${message}`;

    while(resultsContainer.firstChild){
        resultsContainer.removeChild(resultsContainer.firstChild);
    }

    const errorCard = document.createElement("div");
    errorCard.classList.add("error-card");
    
    const errorText = document.createElement("p");
    errorText.textContent = message || "Movies cannot found. Please try another movie.";

    errorCard.appendChild(errorText);

    resultsContainer.appendChild(errorCard);
};

export const showLoading = () => {
    resultsContainer.innerHTML = "";

    const loadingDiv = document.createElement("div");
    loadingDiv.classList.add("loading");

    const loadingText = document.createElement("p");
    loadingText.textContent = "Loading movies...";

    const loadingSpinner = document.createElement("div");
    loadingSpinner.classList.add("loading-spinner");

    loadingDiv.appendChild(loadingText);
    loadingDiv.appendChild(loadingSpinner);
    

    resultsContainer.appendChild(loadingDiv);
};

export const hideLoading = () => {

};
