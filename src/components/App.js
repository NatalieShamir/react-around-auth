import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

let isClicked = false;

function App() {
  function handleEditAvatarClick() {
    const isEditAvatarPopupOpen = document.querySelector(
      ".popup_type_avatar-change"
    );
    isEditAvatarPopupOpen.addEventListener("click", () => {
      isClicked = true;
    });
  }

  function handleEditProfileClick() {
    const isEditProfilePopupOpen = document.querySelector(
      ".popup_type_edit-profile"
    );
    isEditProfilePopupOpen.addEventListener("click", () => {
      isClicked = true;
    });
  }

  function handleAddPlaceClick() {
    const isAddPlacePopupOpen = document.querySelector(".popup_type_add-card");
    isAddPlacePopupOpen.addEventListener("click", () => {
      isClicked = true;
    });
  }

  return (
    <body className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm name="edit-profile" title="Edit profile">
        {" "}
        <fieldset class="popup__form-fieldset">
          <label for="name" class="popup__form-label"></label>
          <input
            type="text"
            id="name-input"
            class="popup__form-input popup__form-input_type_name"
            name="name"
            placeholder="Name"
            required
            minlength="2"
            maxlength="40"
          />
          <span id="name-input-error" class="popup__form-error"></span>
        </fieldset>
        <fieldset class="popup__form-fieldset">
          <label for="job" class="popup__form-label"></label>
          <input
            type="text"
            id="job-input"
            class="popup__form-input popup__form-input_type_job"
            name="job"
            placeholder="About me"
            required
            minlength="2"
            maxlength="200"
          />
          <span id="job-input-error" class="popup__form-error"></span>
        </fieldset>
        <fieldset class="popup__form-fieldset">
          <button type="submit" class="button popup__form-button">
            Save
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="add-card" title="New Place">
        {" "}
        <fieldset class="popup__form-fieldset">
          <label for="title" class="popup__form-label"></label>
          <input
            type="text"
            id="title-input"
            class="popup__form-input"
            name="title"
            placeholder="Title"
            required
            minlength="1"
            maxlength="30"
          />
          <span id="title-input-error" class="popup__form-error"></span>
        </fieldset>
        <fieldset class="popup__form-fieldset">
          <label for="image" class="popup__form-label"></label>
          <input
            type="url"
            id="image-input"
            class="popup__form-input popup__form-input_type_image"
            name="image"
            placeholder="Image URL"
            required
          />
          <span id="image-input-error" class="popup__form-error"></span>
        </fieldset>
        <fieldset class="popup__form-fieldset">
          <button
            type="submit"
            class="button popup__form-button popup__form-button_add-card"
          >
            Create
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="avatar-change" title="Change profile picture">
        <fieldset class="popup__form-fieldset">
          <label for="image" class="popup__form-label"></label>
          <input
            type="url"
            id="avatar-input"
            class="popup__form-input popup__form-input_type_image"
            name="image"
            placeholder="Image URL"
            required
          />
          <span id="avatar-input-error" class="popup__form-error"></span>
        </fieldset>
        <fieldset class="popup__form-fieldset">
          <button
            type="submit"
            class="button popup__form-button popup__form-button_avatar-change"
          >
            Save
          </button>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm name="confirm-delete" title="Are you sure?">
        {" "}
        <fieldset class="popup__form-fieldset">
          <button
            type="submit"
            class="button popup__form-button popup__form-button_confirm-delete"
          >
            Yes
          </button>
        </fieldset>
      </PopupWithForm>
      <ImagePopup />
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
