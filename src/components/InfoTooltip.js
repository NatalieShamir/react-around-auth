import React from "react";
import registrationSuccess from "../images/successful_registration.svg"
import registrationFail from "../images/unsuccessful_registration.svg"

function InfoTooltip({ isOpen, onClose, isSuccessful }) {
    return (
        <div
            className={`popup  ${isOpen ? "popup_open" : ""}`}
        >
            <div className="popup__container">
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="close"
                    className="popup__close-button"
                ></button>
                {isSuccessful === "successful" ? (
                    <div>
                        <img className="popup__image-tooltip" src={registrationSuccess} alt="A vector image of a tick symbol" />
                        <p className="popup__status-message">Success! You have been registered.</p>
                    </div>
                ) : (
                    <div>
                        <img className="popup__image-tooltip" src={registrationFail} alt="A vector image of a red x symbol" />
                        <p className="popup__status-message">Oops, something went wrong! Please try again.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export { InfoTooltip };