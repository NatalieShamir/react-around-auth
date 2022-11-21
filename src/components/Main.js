import editpProfileImageIcon from "../images/edit-profile-icon.svg";
import editpProfileIcon from "../images/button-edit.svg";
import addCardIcon from "../images/plus_sign.svg";
import React, { useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";
import { UserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const currentUser = React.useContext(UserContext);
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card).then((res) => {
      const newCards = cards.filter((card) => card._id !== card);
      setCards(newCards);
    });
  }

  useEffect(() => {
    api
      .getCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__user">
          <div
            className="profile__image"
            title="profile avatar image"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          >
            <div className="profile__change-image-button-hide">
              <button
                onClick={props.onEditAvatarClick}
                type="button"
                className="profile__change-image-button"
              >
                <img
                  src={editpProfileImageIcon}
                  alt="A pen"
                  className="profile__change-image-icon"
                />
              </button>
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button
              onClick={props.onEditProfileClick}
              type="button"
              className="profile__edit-button"
            >
              <img
                src={editpProfileIcon}
                alt="A pen"
                className="profile__edit-icon"
              />
            </button>
            <p className="profile__subtitle">{currentUser.job}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          type="button"
          className="profile__add-button"
        >
          <img
            src={addCardIcon}
            alt="A plus sign inside the add button"
            className="profile__add-icon"
          />
        </button>
      </section>
      <section className="cards">
        <ul className="cards__gallery">
          {" "}
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
                {...card}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
