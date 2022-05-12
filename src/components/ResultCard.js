import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = (movie) => {
  const { watchlist, watched, addMovieToWatchlist, addMovieToWatched } =
    useContext(GlobalContext);
  const storedMovieWatchlist = watchlist.find((o) => o.id === movie.movie.id);
  const storedMovieWatched = watched.find((o) => o.id === movie.movie.id);

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
              : "-"}
          </h4>
          <h4 className="release-date">
            IMDB :{" "}
            <b>{movie.movie.vote_average ? movie.movie.vote_average : "-"}</b>
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={storedMovieWatchlist}
            onClick={() => addMovieToWatchlist(movie.movie)}
          >
            Add to Watchlist
          </button>
          <button
            className="btn"
            disabled={storedMovieWatched}
            onClick={() => addMovieToWatched(movie.movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
