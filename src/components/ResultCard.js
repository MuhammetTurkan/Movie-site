import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCard = (movie) => {
  const { addMovieToWatchlist } = useContext(GlobalContext)
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.movie.title}</h3>
          <h4 className="release-date">
            {movie.movie.release_date
              ? movie.movie.release_date.substring(0, 4)
              : '-'}
          </h4>
          <h4 className="release-date">
            IMDB :{' '}
            <b>{movie.movie.vote_average ? movie.movie.vote_average : '-'}</b>
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            onClick={() => addMovieToWatchlist(movie.movie)}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultCard
