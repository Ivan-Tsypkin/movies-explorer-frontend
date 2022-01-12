export default function MoreMoviesButton({ handleSetRenderIndex }) {

  return (
    <div className="more-movies">
      <button
        className="more-movies__button"
        type="button"
        aria-label="Ещё"
        onClick={() => handleSetRenderIndex()}
      >Ещё</button>
    </div>
  )
}
