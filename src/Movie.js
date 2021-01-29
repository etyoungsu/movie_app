import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {    // id 필요없음!
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}</p>
            </div>
        </div>
    );  //  alt, title for blind, div에서 style={{}}시 안에서 css
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default Movie;