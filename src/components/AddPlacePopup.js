import React from "react";
import { PopupWithForm } from "./PopupWithForm";

function AddPlacePopup() {
  return (
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
  );
}

export { AddPlacePopup };
