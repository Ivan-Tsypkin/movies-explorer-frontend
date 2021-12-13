export default function MoviesCardList({ children }) {

  return (
    <div className="movies">
      <ul className="movies__cards-list">
        {children}
      </ul>
    </div>
  )
}
