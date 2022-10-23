import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { PopupWithForm } from "./PopupWithForm";
import React, { useState } from "react";

function App() {
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);

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
  }

  return (
    <body className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name="edit-profile"
        title="Edit profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        {" "}
        <fieldset class="popup__form-fieldset">
          <label for="name" class="popup__form-label"></label>
          <input
            type="text"
            id="name-input"
            class="popup__form-input popup__form-input_type_name"
            name="name"
            placeholder="Name"
            required
            minlength="2"
            maxlength="40"
          />
          <span id="name-input-error" class="popup__form-error"></span>
        </fieldset>
        <fieldset class="popup__form-fieldset">
          <label for="job" class="popup__form-label"></label>
          <input
            type="text"
            id="job-input"
            class="popup__form-input popup__form-input_type_job"
            name="job"
            placeholder="About me"
            required
            minlength="2"
            maxlength="200"
          />
          <span id="job-input-error" class="popup__form-error"></span>
        </fieldset>
        <fieldset class="popup__form-fieldset">
          <button type="submit" class="button popup__form-button">
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
        <fieldset class="popup__form-fieldset">
          <label for="title" class="popup__form-label"></label>
          <input
            type="text"
            id="title-input"
            class="popup__form-input"
            name="title"
            placeholder="Title"
            required
            minlength="1"
            maxlength="30"
          />
          <span id="title-input-error" class="popup__form-error"></span>
        </fieldset>
        <fieldset class="popup__form-fieldset">
          <label for="image" class="popup__form-label"></label>
          <input
            type="url"
            id="image-input"
            class="popup__form-input popup__form-input_type_image"
            name="image"
            placeholder="Image URL"
            required
          />
          <span id="image-input-error" class="popup__form-error"></span>
        </fieldset>
        <fieldset class="popup__form-fieldset">
          <button
            type="submit"
            class="button popup__form-button popup__form-button_add-card"
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
        <fieldset class="popup__form-fieldset">
          <label for="image" class="popup__form-label"></label>
          <input
            type="url"
            id="avatar-input"
            class="popup__form-input popup__form-input_type_image"
            name="image"
            placeholder="Image URL"
            required
          />
          <span id="avatar-input-error" class="popup__form-error"></span>
        </fieldset>
        <fieldset class="popup__form-fieldset">
          <button
            type="submit"
            class="button popup__form-button popup__form-button_avatar-change"
          >
            Save
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="confirm-delete" title="Are you sure?">
        {" "}
        <fieldset class="popup__form-fieldset">
          <button
            type="submit"
            class="button popup__form-button popup__form-button_confirm-delete"
          >
            Yes
          </button>
        </fieldset>
      </PopupWithForm>
      <ImagePopup />
    </body>
  );
}

export default App;
