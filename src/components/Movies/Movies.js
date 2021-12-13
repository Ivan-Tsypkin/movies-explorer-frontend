import SearchForm from './SearchForm';
import MoviesCardList from './MoviesCardList';
import MoviesCard from './MoviesCard';
import MoreMoviesButton from './MoreMoviesButton';
import Preloader from './Preloader';

export default function Movies({ isLoading }) {

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
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </MoviesCardList>}
      <MoreMoviesButton />
    </>
  )
}
