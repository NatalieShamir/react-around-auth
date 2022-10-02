import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm name="edit-profile" title="Edit profile" />
      <PopupWithForm name="add-card" title="New Place" />
      <PopupWithForm name="avatar-change" title="Change profile picture" />
      <PopupWithForm name="confirm-delete" title="Are you sure?" />
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
