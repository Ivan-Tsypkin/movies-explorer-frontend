import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import MoviesCard from './MoviesCard';
import Preloader from './Preloader';

export default function SavedMovies({ isLoading }) {

  return (
    <>
      <SearchForm />
      {isLoading
      ? <Preloader />
      : <MoviesCardList>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </MoviesCardList>}
    </>
  )
}
