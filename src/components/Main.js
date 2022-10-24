import editpProfileImageIcon from "../images/edit-profile-icon.svg";
import editpProfileIcon from "../images/button-edit.svg";
import addCardIcon from "../images/plus_sign.svg";
import React, { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
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
            title="An image of the French oceanographer- Jacques Cousteau"
            style={{ backgroundImage: `url(${userAvatar})` }}
          >
            {userAvatar}
            <div className="profile__change-image-button-hide">
              <button
                onClick={props.onEditAvatarClick}
                type="button"
                className="profile__change-image-button"
              >
                <img
                  src={editpProfileImageIcon}
                  alt="A vector image of a pen inside the profile image"
                  className="profile__change-image-icon"
                />
              </button>
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={props.onEditProfileClick}
              type="button"
              className="profile__edit-button"
            >
              <img
                src={editpProfileIcon}
                alt="A vector image of a pen inside the edit button"
                className="profile__edit-icon"
              />
            </button>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          type="button"
          className="profile__add-button"
        >
          <img
            src={addCardIcon}
            alt="An image of a plus sign inside the add button"
            className="profile__add-icon"
          />
        </button>
      </section>
      <section className="cards">
        <ul className="cards__gallery">
          {" "}
          {cards.map((card) => {
            return <Card key={card.id} card={card} />;
          })}
        </ul>
      </section>
    </main>
  );
}
