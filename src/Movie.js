import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({id, year, title, summary, poster}){
    return(
        <li className="movie-list" data-id={id}>
            <div className="movie-img">
                <img src={poster} alt={title} title={title}/>
            </div>
            <div className="movie-txt">
                <h3 className="movie-txt-title">{title}</h3>
                <p className="movie-txt-year">{year}</p>
                <h4 className="movie-txt-summary">{summary}</h4>
                
            </div>
        </li>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;