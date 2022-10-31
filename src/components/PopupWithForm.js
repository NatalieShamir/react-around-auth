import React, { Component } from "react";

function PopupWithForm(props) {
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
        <form name={props.name} className="popup__form">
          <h3 className="popup__form-title">{props.title}</h3>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export { PopupWithForm };
