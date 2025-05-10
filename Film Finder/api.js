import { renderMovies, showError, showLoading, hideLoading } from './ui.js';

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const getMovies = async () => {
    const searchValue = searchInput.value.trim();
    if (!searchValue) return;

    showLoading();

    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=5eefd4fc`);
        const data = await response.json();

        if(data.Response === "True") {
            renderMovies(data.Search);
        }
        else{
            showError(data.Error || "Cannot find movie!");
        }

        console.log(data);
    }
    catch (error) {
        console.error("Cannot find movie data.", error);
    }
    finally {
        hideLoading
    }

}

searchButton.addEventListener("click", getMovies);
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getMovies();
    }
});