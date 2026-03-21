import {searchMovies} from '../services/movies.js'
import {useState} from 'react';

export function useMovies({search}) {

  const [responseMovies, setResponsemovies]= useState ([])

  const movies = responseMovies.Search 

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    image : movie.Poster,
    year: movie.Year,
  }))

  const getMovies = () => {
    if(search) 
    {
      setResponsemovies(responsemovies)
    } else{
      setResponsemovies(withoutResults)
    }
  }

  return { movies: mappedMovies, getMovies};
}
