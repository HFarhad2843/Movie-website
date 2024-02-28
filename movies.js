let row = document.querySelector('.row')

fetch('https://api.tvmaze.com/shows')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   
    return response.json();
  })
  .then(data => {
   
    data.forEach(movie => {
        row.innerHTML +=`<div class="card col-3">
        <img src="${movie.image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${movie.name}</h5>
          <p class="card-text">Premiere:${movie.premiered}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">IMDB:${movie.rating.average}</li>
          <li class="list-group-item">Genre:${movie.genres}</li>
          <li class="list-group-item">Language:${movie.language}</li>
        </ul>
        <div class="card-body">
          <a href="${movie.officialsite}" class="card-link">Go to Website</a>
          <a href="cardDetail.html?id=${movie.id}" class="card-link">Go to detail</a>
        </div>
        </div>`
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  
  fetch('https://api.tvmaze.com/shows')
  .then(res => res.json())
  .then(data => {})




let roow = document.querySelector('.row');
let searchForm = document.querySelector('form');
let searchInput = document.querySelector('#search');

function renderMovies(movies) {
  row.innerHTML = ''; 
  movies.forEach(movie => {
      row.innerHTML += `<div class="card col-3">
          <img src="${movie.image.medium}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${movie.name}</h5>     
              <p class="card-text">Premiere: ${movie.premiered}</p>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">IMDB Rating: ${movie.rating.average}</li>
              <li class="list-group-item">Genre: ${movie.genres}</li>
              <li class="list-group-item">Language: ${movie.language}</li>
          </ul>
          <div class="card-body">
              <a href="${movie.officialSite}" class="card-link">Go to website</a>
              <a href="carddetail.html?id=${movie.id}" class="card-link">Go to detail</a>
          </div>
      </div>`;
  });
}

function handleSearch(event) {
  event.preventDefault(); 
  let searchTerm = searchInput.value.trim().toLowerCase();
  if (searchTerm.length >= 3) {
      fetch(`https://api.tvmaze.com/shows`)
          .then(response => response.json())
          .then(data => {
              const matchingMovies = data.filter(movie => movie.name.toLowerCase().includes(searchTerm));
              renderMovies(matchingMovies);
          })
          .catch(error => {
              console.error(error);
          });
  }
}
searchForm.addEventListener('submit', handleSearch);



