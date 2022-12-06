import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { PopupWithForm } from "./PopupWithForm";
import React, { useEffect } from "react";
import { UserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { AddPlacePopup } from "./AddPlacePopup";

function App() {
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  const [currentUser, setCurentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.setUserInfo().then((res) => {
      setCurentUser(res);
    });

    api
      .getCardList()
      .then((res) => {
        setCards(res);
      })

      .catch((err) => console.log(err));
  }, []);

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard({
      name: "",
      link: "",
    });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser({ name, about }) {
    api
      .setUserInfo(name, about)
      .then((res) => {
        setCurentUser(res);
      })
      .catch(console.log)
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setUserAvatar(avatar)
      .then((res) => {
        setCurentUser({ ...currentUser, avatar: res.avatar });
      })
      .catch(console.log)
      .finally(() => {
        closeAllPopups();
      });
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    if (isLiked) {
      api.removeLike(card._id);
    } else {
      api.addLike(card._id).then((likedCard) => {
        const newCards = cards.map((card) => {
          return card._id === likedCard._id ? likedCard : card;
        });
        setCards(newCards);
      });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((res) => {
      const newCards = cards.filter((card) => card._id !== card);
      setCards(newCards);
    });
  }

  function handleAddPlaceSubmit(name, url) {
    api.createCard(name, url).then((res) => {
      setCards([res, ...cards]);
    });
  }

  return (
    <UserContext.Provider value={currentUser || ""}>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlacePopup={handleAddPlaceSubmit}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <PopupWithForm
          name="confirm-delete"
          title="Are you sure?"
          buttonText={"Yes"}
        >
          {" "}
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
