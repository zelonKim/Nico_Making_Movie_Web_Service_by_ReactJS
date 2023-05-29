import Movies from '../components/Movies'
import { useState, useEffect } from 'react';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]); 

  const getMovies = async() => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    const json = await response.json()
      setMovies(json.data.movies);
      setLoading(false);
    }

  useEffect(()=> {getMovies()},[]);

  return (
    <div>
      {loading ? <strong> Loading... </strong>: 
      <div>
        {movies.map(movie => (
          <Movies 
            key={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title}
            summary={movie.summary} 
            genres={movie.genres}
            id={movie.id}
          />
          ))}
      </div>
      }
    </div>
    )
  }

export default Home;