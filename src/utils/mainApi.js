export const BASE_SERVER_URL = 'https://api.sirius.nomoredomains.work';
const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
const LOCAL_STORAGE_FAVE_MOVIES_KEY = 'faveMovies';


function handleResponse(res) {
  if (res.ok) {return res.json()}
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email, name, password) => {
  return fetch(`${BASE_SERVER_URL}/signup`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ email, name, password })
  })
    .then(res => handleResponse(res))
};

export const authorize = (password, email) => {
  return fetch(`${BASE_SERVER_URL}/signin`, {
    method: 'POST',
    headers: HEADERS,
    credentials: 'include',
    body: JSON.stringify({ password, email })
  })
    .then(res => handleResponse(res))
    .then((data) => {
      return data;
    })
};

export const logout = () => {
  return fetch(`${BASE_SERVER_URL}/signout`, {
    method: 'GET',
    headers: HEADERS,
    credentials: 'include',
  })
    .then(res => handleResponse(res))
};

export const getUserInfo = () => {
  return fetch(`${BASE_SERVER_URL}/users/me`, {
    method: 'GET',
    headers: HEADERS,
    credentials: 'include',
  })
    .then(res => handleResponse(res))
}

export const editUserInfo = (email, name) => {
  return fetch(`${BASE_SERVER_URL}/users/me`, {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify({ email, name }),
    credentials: 'include',
  })
    .then(res => handleResponse(res))
}

export const getAllUserMovies = () => {
  return fetch(`${BASE_SERVER_URL}/movies`, {
  method: 'GET',
  headers: HEADERS,
  credentials: 'include',
  })
    .then(res => handleResponse(res))
}

export const addMovieToFave = (movie) => {
  return fetch(`${BASE_SERVER_URL}/movies`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      country: movie.country || 'country',
      director: movie.director || 'director',
      duration: movie.duration || 0,
      year: movie.year || 'year',
      description: movie.description || 'description',
      image: movie.image.url || 'image-url',
      trailerLink: movie.trailerLink || 'trailer-link',
      nameRU: movie.nameRU || 'nameRU',
      nameEN: movie.nameEN || 'nameEN',
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    }),
    credentials: 'include',
  })
    .then(res => handleResponse(res))
}

export const removeMovieFromFave = (movie) => {
  return fetch(`${BASE_SERVER_URL}/movies/${movie._id}`, {
    method: 'DELETE',
    headers: HEADERS,
    credentials: 'include',
    })
      .then(res => handleResponse(res))
}

export const getLocalStorageFaveMovies = () => {
  const storage = localStorage.getItem(LOCAL_STORAGE_FAVE_MOVIES_KEY);
  if (storage) {
    return JSON.parse(storage);
  }

  return null;
}

export const setLocalStorageFaveMovies = (value) => {
  localStorage.setItem(LOCAL_STORAGE_FAVE_MOVIES_KEY, JSON.stringify(value));
}
