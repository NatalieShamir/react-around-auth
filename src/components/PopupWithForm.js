export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="close"
          className="popup__close-button"
        ></button>
        <form name={props.name} className="popup__form">
          <h3 className="popup__form-title">{props.title}</h3>
          <fieldset className="popup__form-fieldset">
            <label for="name" className="popup__form-label"></label>
            <input
              type="text"
              id="name-input"
              className="popup__form-input"
              name="name"
              placeholder="Name"
              required
              minlength="2"
              maxlength="40"
            />
            <span id="name-input-error" className="popup__form-error"></span>
          </fieldset>
          <fieldset className="popup__form-fieldset">
            <label for="job" className="popup__form-label"></label>
            <input
              type="text"
              id="job-input"
              className="popup__form-input"
              name="job"
              placeholder="About me"
              required
              minlength="2"
              maxlength="200"
            />
            <span id="job-input-error" className="popup__form-error"></span>
          </fieldset>
          <fieldset className="popup__form-fieldset">
            <button
              type="submit"
              className="button popup__form-button"
            ></button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
