import editpProfileImageIcon from "../images/edit-profile-icon.svg";
import editpProfileIcon from "../images/button-edit.svg";
import addCardIcon from "../images/plus_sign.svg";

function Main() {
  return (
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
  );
}

export default Main;
