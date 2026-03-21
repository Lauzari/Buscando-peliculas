import React from "react";

function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return <p>no se encontraro peliculas en la busqueda</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return hasMovies 
  ? <ListOfMovies movies={movies} /> 
  : <NoMoviesResults />;
}
