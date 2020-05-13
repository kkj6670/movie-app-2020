import React from 'react';
import './App.css';
import StateApp from './StateApp/StateApp';
import Axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [

    ]
  };

  getMovies = async () => {
      const {
        data : {
          data : { movies }
        }
      } = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

      console.log(movies);
      this.setState({movies, isLoading: false});
  }

  componentDidMount(){
    console.log("컴포넌트 마운트!");
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return(
      <section className="section movie">
        <ul className="movie-list-box">
        {isLoading
          ? <li className="loader-box">
              <span className="loader-text">Loading...</span>
            </li>
          : movies.map(movie => {
            console.log(movie, "무비 map");
            return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
            )
          })}
        </ul>
      </section>
    )
  }


}

export default App;