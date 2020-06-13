import React from 'react';
import Axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

class Home extends React.Component {
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
            return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
            )
          })}
        </ul>
      </section>
    )
  }


}

export default Home;
