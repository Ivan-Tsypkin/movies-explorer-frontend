export default function SearchForm() {

  return (
    <div className="search">
        <form className="search__form" method="POST" name="searchForm">
          <div className="search__bar">
            <input
              className="search__form-item"
              type="text"
              placeholder="Фильм"
              name="userName"
              id="user-name"
              minLength="2"
              maxLength="100"
              required
            ></input>
            <button className="search__submit-button" type="submit" aria-label="Найти">Найти</button>
          </div>
          <label className="search__checkbox-label">
            <input className="search__checkbox" type="checkbox"></input>
            <span className="search__visible-checkbox"></span>
            Короткометражки
          </label>
        </form>
    </div>
  )
}
