import "./App.css"
import { useState, useEffect, useRef } from "react"
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'


function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect (() => {
    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if (search === ''){
      setError('No se puede buscar una pelicla vacia')
      return
    }

    if (search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (search.length <3){
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }


    setError(null)
  }, [search])

  return { search, updateSearch, error }
  }

  

function App() {
  const { search,updateSearch, error } = useSearch();
 const {movies, getMovies,loading}= useMovies({search})


 const handleSubmit = (e) => {
  e.preventDefault()
  getMovies();
 }

 
 const handleChange = (e) => {
  updateSearch(e.target.value)

 }



  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder= "Avengers, Star Wars, The MaTrix..." />
           {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
export default App;
