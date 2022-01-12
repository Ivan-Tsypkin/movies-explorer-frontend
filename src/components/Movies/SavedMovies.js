import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import MoviesCard from './MoviesCard';
import Preloader from './Preloader';
import NoMovieFound from './NoMovieFound';

export default function SavedMovies({
  isLoading,
  faveMovies,
  onSearchSubmit,
  faveMoviesIdList,
  onMovieRemove
}) {

  return (
    <>
      <SearchForm onSearchSubmit={onSearchSubmit} />
      {isLoading
      ? <Preloader />
      : <MoviesCardList>
          {faveMovies.length ? "" : <NoMovieFound />}
          {faveMovies.map(movie => {
              return (<MoviesCard
                key={movie._id}
                movie={movie}
                faveMoviesIdList={faveMoviesIdList}
                onMovieRemove={onMovieRemove}
              />)
          })
          }
        </MoviesCardList>}
    </>
  )
}
