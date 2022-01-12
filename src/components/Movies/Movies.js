import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import { useState, useEffect } from 'react';
import MoviesCard from './MoviesCard';
import MoreMoviesButton from './MoreMoviesButton';
import Preloader from './Preloader';
import NoMovieFound from './NoMovieFound';

export default function Movies({
  isLoading,
  movies,
  moviesCardRenderIndex,
  handleSetRenderIndex,
  onSearchSubmit,
  onMovieAdd,
  onMovieRemove,
  faveMoviesIdList,
  faveMovies,
}) {
  const [isMoviesArrayEnd, setIsMoviesArrayEnd] = useState(false)
  useEffect(() => {
    if (movies.length <= moviesCardRenderIndex) {
      setIsMoviesArrayEnd(true);
    } else {
      setIsMoviesArrayEnd(false);
    }
  }, [movies.length, moviesCardRenderIndex])

  return (
    <>
      <SearchForm onSearchSubmit={onSearchSubmit}/>
      {isLoading
        ? <Preloader />
        : <MoviesCardList>
            {movies.length ? "" : <NoMovieFound />}
            {movies.slice(0, moviesCardRenderIndex).map(movie => {
                return (<MoviesCard
                  key={movie.id}
                  movie={movie}
                  onMovieAdd={onMovieAdd}
                  onMovieRemove={onMovieRemove}
                  faveMoviesIdList={faveMoviesIdList}
                  faveMovies={faveMovies}
                />)
            })
          }
      </MoviesCardList>}
      {isMoviesArrayEnd
        ? null
        : <MoreMoviesButton handleSetRenderIndex={handleSetRenderIndex} />
      }
    </>
  )
}
