function EditAvatarPopup() {
  return (
    <PopupWithForm
      name="avatar-change"
      title="Change profile picture"
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      buttonText={"Save"}
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
    </PopupWithForm>
  );
}

export { EditAvatarPopup };
