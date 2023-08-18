import {useState, useEffect} from 'react';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {

  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

  const [movie, setMovie] = useState(null);

  //function to getMovies
  const getMovie = async (searchTerm) => {
    try {

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
  
      const data = await response.json();
        console.log(data)
      setMovie(data);

    } catch(e){
      console.error(e);
    }
  }

  useEffect(() => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
    getMovie(randomCharacter);
  }, []);

  return (
    <div className="App bg-dark vh-100">
      <div className>

        <Form moviesearch={getMovie} />
        <MovieDisplay movie={movie}/>
      </div>
    </div>
  );
}

export default App;
