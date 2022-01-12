export const BASE_MOVIE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
const LOCAL_STORAGE_MOVIES_KEY = 'initMovies';

function handleResponse(res) {
  if (res.ok) {return res.json()}
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getInitialMovies = () => {
  return fetch(`${BASE_MOVIE_URL}`, {
    method: 'GET',
    headers: HEADERS,
/*     credentials: 'include', */
  })
    .then(res => handleResponse(res))
}

export const getLocalStorageMovies = () => {
  const storage = localStorage.getItem(LOCAL_STORAGE_MOVIES_KEY);
  if (storage) {
    return JSON.parse(storage);
  }

  return null;
}

export const setLocalStorageMovies = (value) => {
  localStorage.setItem(LOCAL_STORAGE_MOVIES_KEY, JSON.stringify(value));
}
