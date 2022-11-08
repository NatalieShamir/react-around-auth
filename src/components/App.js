import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { PopupWithForm } from "./PopupWithForm";
import React from "react";

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

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Edit profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        {" "}
        <fieldset className="popup__form-fieldset">
          <label htmlFor="name" className="popup__form-label"></label>
          <input
            type="text"
            id="name-input"
            className="popup__form-input popup__form-input_type_name"
            name="name"
            placeholder="Name"
            required
            minLength="2"
            maxLength="40"
          />
          <span id="name-input-error" className="popup__form-error"></span>
        </fieldset>
        <fieldset className="popup__form-fieldset">
          <label htmlFor="job" className="popup__form-label"></label>
          <input
            type="text"
            id="job-input"
            className="popup__form-input popup__form-input_type_job"
            name="job"
            placeholder="About me"
            required
            minLength="2"
            maxLength="200"
          />
          <span id="job-input-error" className="popup__form-error"></span>
        </fieldset>
        <fieldset className="popup__form-fieldset">
          <button type="submit" className="button popup__form-button">
            Save
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="add-card"
        title="New Place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        <fieldset className="popup__form-fieldset">
          <button
            type="submit"
            className="button popup__form-button popup__form-button_add-card"
          >
            Create
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        name="avatar-change"
        title="Change profile picture"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__form-fieldset">
          <label htmlFor="image" className="popup__form-label"></label>
          <input
            type="url"
            id="avatar-input"
            className="popup__form-input popup__form-input_type_image"
            name="image"
            placeholder="Image URL"
            required
          />
          <span id="avatar-input-error" className="popup__form-error"></span>
        </fieldset>
        <fieldset className="popup__form-fieldset">
          <button
            type="submit"
            className="button popup__form-button popup__form-button_avatar-change"
          >
            Save
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="confirm-delete" title="Are you sure?">
        {" "}
        <fieldset className="popup__form-fieldset">
          <button
            type="submit"
            className="button popup__form-button popup__form-button_confirm-delete"
          >
            Yes
          </button>
        </fieldset>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
