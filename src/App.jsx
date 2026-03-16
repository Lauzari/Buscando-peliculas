
import './App.css'
import responsemovies from './mocks/with-results.json'
import withoutResults from './mocks/with-results.json'

function App (){
  const movies= responsemovies.Search
  const hasMovies= movies?.length>0 
  return (
    <div className='page'>
      
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The MaTrix...'/>
          <button type= 'submit'>Buscar</button>
        </form>
      </header>
  <main> 
   { hasMovies ? (
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title}/>
          </li>

        ))
        }
      </ul>
   ) : ( 
    <p>No se encontraron resultados para esta busqueda</p>

      )}
  </main>
    </div>
  )
}
  export default App
