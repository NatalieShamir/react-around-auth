let isOpen = false;

export default function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup_type_${props.name}`}>
        <div className="popup__container">
          <button
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
      <div className={isOpen ? "popup_open" : ""}></div>
    </>
  );
}
