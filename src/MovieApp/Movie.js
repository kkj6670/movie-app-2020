import React from "react";
import PropTypes from "prop-types";
import "./movie.css";

function Movie({id, year, title, summary, poster, genres}){
    const maxLen = 260;
    const fullSummary = summary.slice(0,maxLen);
    summary =  fullSummary.length >= maxLen ? summary.slice(0,maxLen-5)+"....." : fullSummary;
    return(
        <li className="movie-list" data-id={id}>
            <div className="movie-img">
                <img src={poster} alt={title} title={title}/>
            </div>
            <div className="movie-txt">
                <h3 className="movie-txt-title">{title}</h3>
                <p className="movie-txt-year">{year}</p>
                <ul className="movie-genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="movie-genres-genre">{genre}</li>
                    ))}
                </ul>
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
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;