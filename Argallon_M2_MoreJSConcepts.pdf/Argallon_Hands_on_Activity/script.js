document.getElementById('searchBtn').addEventListener('click', fetchMovie);

function fetchMovie() {
    const title = document.getElementById('movieTitle').value.trim();
    if (title === '') {
        alert('Please enter a movie title!');
        return;
    }

    const apiKey = 'eb6c75f2';  
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            if (data.Response === 'False') {
                showError('Movie not found. Try another title.');
            } else {
                displayMovie(data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showError('Something went wrong. Try again later.');
        });
}

function displayMovie(data) {
    const movieResult = document.getElementById('movieResult');
    movieResult.innerHTML = `
        <img src="${data.Poster !== 'N/A' ? data.Poster : 'no-image.png'}" alt="${data.Title} Poster">
        <h2>${data.Title} (${data.Year})</h2>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>IMDB Rating:</strong> ${data.imdbRating} ⭐</p>
    `;
    movieResult.style.display = 'block';
}

function showError(message) {
    const movieResult = document.getElementById('movieResult');
    movieResult.innerHTML = `<p style="color: red; font-size: 1.2em;">${message}</p>`;
    movieResult.style.display = 'block';
}
