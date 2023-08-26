import React from 'react';
import './MoviesCard.css';
import { CARDS_IMAGE_BASE_URL } from '../../config/config'

function MoviesCard({ card, savedCard, onSaveMovie, onDeleteMovie, isSavedFilms, savedMovies }) {
    const cardSaveButtonClassName = (
        `element__save-button element-button ${savedCard ? "element__save-button_active" : ""}`
    );

    function handleCardClick() {
        if (savedCard) {
            onDeleteMovie(savedMovies.filter((movie) => movie.movieId === card.id)[0]);
        } else {
            onSaveMovie(card);
        }
    }

    function handleCardDelete() {
        onDeleteMovie(card);
    }

    function convertDuration(duration) {
        return `${duration} минут`;
    }

    return (
        <li className="cards__element">
            <article className="element" id={card._id}>
                <div className="element__card">
                <div className="element__info">
                        <h2 className="element__title">{card.nameRU}</h2>
                        <p className="element__duration">{convertDuration(card.duration)}</p>
                </div>
                <a className="element__link" href={card.trailerLink} target="_blank" rel="noreferrer">
                    <img className="element__photo" src={isSavedFilms ? card.image : `${CARDS_IMAGE_BASE_URL}/${card.image.url}`} alt={card.nameRU} />
                </a>
                <div className="element__footr-info">
                {isSavedFilms ? (
                        <button 
                        onClick={handleCardDelete}
                        className="element__delete-button element-button" 
                        type="button" 
                        aria-label="Кнопка для удаления фильма"
                        ></button>
                    ) : (
                        <button
                            className={cardSaveButtonClassName}
                            type="button"
                            aria-label="Кнопка для сохранения и удаления фильма"
                            onClick={handleCardClick}
                        ></button>
                    )}
                </div>
                </div>
            </article>
        </li>
    );
}

export default MoviesCard;