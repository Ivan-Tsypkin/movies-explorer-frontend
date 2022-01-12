import { useState, useEffect } from 'react';

export default function SearchForm({ onSearchSubmit, saveSearchOptions }) {

  const LOCAL_STORAGE_SEARCH_OPTIONS = 'searchOptions'; //Место хранения опций поиска в localStorage

  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const [checked, setChecked] = useState('');

  //Функция чтения опций поиска в localStorage
  const getLocalStorageSearchFormOptions = () => {
    const storage = localStorage.getItem(LOCAL_STORAGE_SEARCH_OPTIONS);
    if (storage) {
      return JSON.parse(storage);
    }

    return '';
  }

  //Функция записи опций поиска в localStorage
  const setLocalStorageSearchFormOptions = (text, checked) => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH_OPTIONS, JSON.stringify({text, checked}));
  }

  //Подстановка предыдущих опций поиска в форму поиска
  useEffect(() => {
    if (saveSearchOptions) {
    const searchOptions = getLocalStorageSearchFormOptions();
    setText(searchOptions.text);
    setChecked(searchOptions.checked);
    };
  }, [])

  //Повторная фильтрация после изменения состояния чекбокса формы поиска
  useEffect(() => {
    onSearchSubmit(text, checked);
    if (saveSearchOptions) {
      setLocalStorageSearchFormOptions(text, checked);
    }
  }, [checked])

  //Функция сабмита формы поиска
  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(text, checked);
    if (saveSearchOptions) {
    setLocalStorageSearchFormOptions(text, checked);
    }
  }

  return (
    <div className="search">
        <form
          className="search__form"
          method="POST"
          name="searchForm"
          onSubmit={handleSubmit}
        >
          <div className={`search__bar ${isFocused ? 'search__bar_focused' : ''}`}>
            <input
              className="search__form-item"
              type="text"
              placeholder="Фильм"
              name="userName"
              id="userName"
              maxLength="100"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => setText(e.target.value)}
              value={text || ''}
            ></input>
            <button className="search__submit-button" type="submit" aria-label="Найти">Найти</button>
          </div>
          <label className="search__checkbox-label">
            <input
              className="search__checkbox"
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={checked || false}
              onChange={() => setChecked(!checked)}
            ></input>
            <span className="search__visible-checkbox"></span>
            Короткометражки
          </label>
        </form>
    </div>
  )
}
