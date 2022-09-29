export function ImagePopup() {
  <div className="popup popup_type_preview">
    <div className="popup__container popup__container_content_preview">
      <figure className="popup__image-content">
        <button
          type="button"
          className="popup__close-button popup__close-button_close_preview"
        ></button>
        <img
          className="popup__preview-image"
          src="#"
          alt="popup featuring an enlarged gallery image"
        />
        <figcaption className="popup__preview-caption"></figcaption>
      </figure>
    </div>
  </div>;
}
