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

  return (
    <UserContext.Provider value={currentUser || ""}>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <PopupWithForm
          name="add-card"
          title="New Place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText={"Create"}
        >
          {" "}
          <fieldset className="popup__form-fieldset">
            <label htmlFor="title" className="popup__form-label"></label>
            <input
              type="text"
              id="title-input"
              className="popup__form-input"
              name="title"
              placeholder="Title"
              required
              minLength="1"
              maxLength="30"
            />
            <span id="title-input-error" className="popup__form-error"></span>
          </fieldset>
          <fieldset className="popup__form-fieldset">
            <label htmlFor="image" className="popup__form-label"></label>
            <input
              type="url"
              id="image-input"
              className="popup__form-input popup__form-input_type_image"
              name="image"
              placeholder="Image URL"
              required
            />
            <span id="image-input-error" className="popup__form-error"></span>
          </fieldset>
        </PopupWithForm>
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
