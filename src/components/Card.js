import React from "react";
import { UserContext } from "../contexts/CurrentUserContext";

function Card({ card }) {
  const currentUser = React.useContext(UserContext);

  // Checking if the current user is the owner of the current card
  const isOwn = card.owner._id === currentUser._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const cardDeleteButtonClassName = `card__delete-button ${
    isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
  }`;

  function handleCardClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleCardClick}
      ></div>
      <button type="button" className={cardDeleteButtonClassName}></button>
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes">
          <button type="button" className="card__like-button"></button>
          <div className="card__likes-amount">{props.card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
