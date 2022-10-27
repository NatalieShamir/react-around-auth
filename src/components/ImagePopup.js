export default function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_preview ${card.link ? "popup_open" : ""}`}
    >
      <div className="popup__container popup__container_content_preview">
        <figure className="popup__image-content">
          <button
            type="button"
            className="popup__close-button popup__close-button_close_preview"
            onClick={onClose}
          ></button>
          <img
            className="popup__preview-image"
            src={card.link}
            alt="popup featuring an enlarged gallery image"
          />
          <figcaption className="popup__preview-caption">
            {card.name}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
