import React from "react";

function PopupWithForm(props, { onSubmit }) {
  return (
    <div
      className={`${`popup popup_type_${props.name}`} ${
        props.isOpen ? "popup_open" : ""
      }`}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          type="button"
          aria-label="close"
          className="popup__close-button"
        ></button>
        <form name={props.name} className="popup__form" onSubmit={onSubmit}>
          <h3 className="popup__form-title">{props.title}</h3>
          {props.children}
          <button type="submit" className="button popup__form-button">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export { PopupWithForm };
