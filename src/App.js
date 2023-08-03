import {useState, useEffect} from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {

  const apiKey = "eafd57f8";

  const [movie, setMovie] = useState(null);

  //function to getMovies
  const getMovie = async (searchTerm) => {
    try {

      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
  
      const data = await response.json();
  
      setMovie(data);

    } catch(e){
      console.error(e);
    }
  }

  useEffect(() => {
    getMovie("Clueless")
  }, []);

  return (
    <div className="App">
        <Form moviesearch={getMovie} />
        <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
