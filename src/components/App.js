import editpProfileImageIcon from "../images/edit-profile-icon.svg";
import editpProfileIcon from "../images/button-edit.svg";
import addCardIcon from "../images/plus_sign.svg";
import Header from "./Header";

function App() {
  return (
    <body className="page">
      <Header />
      <main className="content">
        <section className="profile">
          <div className="profile__user">
            <div
              className="profile__image"
              title="An image of the French oceanographer- Jacques Cousteau"
            >
              <div className="profile__change-image-button-hide">
                <button type="button" className="profile__change-image-button">
                  <img
                    src={editpProfileImageIcon}
                    alt="A vector image of a pen inside the profile image"
                    className="profile__change-image-icon"
                  />
                </button>
              </div>
            </div>
            <div className="profile__info">
              <h1 className="profile__title">Cousteau</h1>
              <button type="button" className="profile__edit-button">
                <img
                  src={editpProfileIcon}
                  alt="A vector image of a pen inside the edit button"
                  className="profile__edit-icon"
                />
              </button>
              <p className="profile__subtitle">Explorer</p>
            </div>
          </div>
          <button type="button" className="profile__add-button">
            <img
              src={addCardIcon}
              alt="An image of a plus sign inside the add button"
              className="profile__add-icon"
            />
          </button>
        </section>
        <section className="cards">
          <ul className="cards__gallery"></ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&#169; 2022 Around The U.S</p>
      </footer>
      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <button
            type="button"
            aria-label="close"
            className="popup__close-button popup__close-button_close_profile"
          ></button>
          <form name="edit-form" className="popup__form popup__form_type_edit">
            <h3 className="popup__form-title">Edit profile</h3>
            <fieldset className="popup__form-fieldset">
              <label for="name" className="popup__form-label"></label>
              <input
                type="text"
                id="name-input"
                className="popup__form-input popup__form-input_type_name"
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
                className="popup__form-input popup__form-input_type_job"
                name="job"
                placeholder="About me"
                required
                minlength="2"
                maxlength="200"
              />
              <span id="job-input-error" className="popup__form-error"></span>
            </fieldset>
            <fieldset className="popup__form-fieldset">
              <button type="submit" className="button popup__form-button">
                Save
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button
            type="button"
            aria-label="close"
            className="popup__close-button popup__close-button_close_add-card"
          ></button>
          <form
            name="add-card-form"
            className="popup__form popup__form_type_add-card"
          >
            <h3 className="popup__form-title">New Place</h3>
            <fieldset className="popup__form-fieldset">
              <label for="title" className="popup__form-label"></label>
              <input
                type="text"
                id="title-input"
                className="popup__form-input"
                name="title"
                placeholder="Title"
                required
                minlength="1"
                maxlength="30"
              />
              <span id="title-input-error" className="popup__form-error"></span>
            </fieldset>
            <fieldset className="popup__form-fieldset">
              <label for="image" className="popup__form-label"></label>
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
            <fieldset className="popup__form-fieldset">
              <button
                type="submit"
                className="button popup__form-button popup__form-button_add-card"
              >
                Create
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="popup popup_type_avatar-change">
        <div className="popup__container">
          <button
            type="button"
            aria-label="close"
            className="popup__close-button popup__close-button_close_avatar-change"
          ></button>
          <form
            name="avatar-change-form"
            className="popup__form popup__form_type_avatar-change"
          >
            <h3 className="popup__form-title">Change profile picture</h3>
            <fieldset className="popup__form-fieldset">
              <label for="image" className="popup__form-label"></label>
              <input
                type="url"
                id="avatar-input"
                className="popup__form-input popup__form-input_type_image"
                name="image"
                placeholder="Image URL"
                required
              />
              <span
                id="avatar-input-error"
                className="popup__form-error"
              ></span>
            </fieldset>
            <fieldset className="popup__form-fieldset">
              <button
                type="submit"
                className="button popup__form-button popup__form-button_avatar-change"
              >
                Save
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="popup popup_type_confirm-delete">
        <div className="popup__container">
          <button
            type="button"
            aria-label="close"
            className="popup__close-button popup__close-button_close_confirm-delete"
          ></button>
          <form
            name="confirm-delete-form"
            className="popup__form popup__form_type_confirm-delete"
          >
            <h3 className="popup__form-title popup__form-title_confirm-delete">
              Are you sure?
            </h3>
            <fieldset className="popup__form-fieldset">
              <button
                type="submit"
                className="button popup__form-button popup__form-button_confirm-delete"
              >
                Yes
              </button>
            </fieldset>
          </form>
        </div>
      </div>
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
      </div>
      <template id="card-template">
        <li className="card">
          <div className="card__image" syle=""></div>
          <button type="button" className="card__delete-button"></button>
          <div className="card__info">
            <h2 className="card__title"></h2>
            <div className="card__likes">
              <button type="button" className="card__like-button"></button>
              <div className="card__likes-amount"></div>
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
