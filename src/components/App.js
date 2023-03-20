import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { PopupWithForm } from "./PopupWithForm";
import React from "react";
import { useEffect } from "react";
import { Route, useHistory, Switch } from 'react-router-dom';
import { UserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { AddPlacePopup } from "./AddPlacePopup";
import * as auth from "../utils/auth"
import { Login } from "./Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { Register } from "./Register";
import { InfoTooltip } from "./InfoTooltip";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isAddCardProcessing, setIsAddCardProcessing] = React.useState(false);
  const [isEditProfileProcessing, setIsEditProfileProcessing] =
    React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const history = useHistory();
  const [isCheckingToken, setIsCheckingToken] = React.useState(true)

  function handleLogin(password, email) {
    auth.signin(password, email)
      .then(res => { // {token: "..."}
        if (res.token) {
          setIsLoggedIn(true)
          localStorage.setItem("token", res.token)
          history.push("/main")
        }
      })
  }

  function handleRegister(password, email) {
    auth.signup(password, email)
      .then(res => { //{data: { _id, email }}
        history.push("/signin")
      })
  }

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      auth.checkToken(token)
        .then(res => { //{data: { _id, email }}
          const { data: { _id, email } } = res
          setCurrentUser({ _id, email })
          setIsCheckingToken(false)
          history.push("/main")
        })
        .finally(() => setIsCheckingToken(false))
    }
  }, [])

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(console.log);

    api
      .getCardList()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({
      name: "",
      link: "",
    });
  }

  useEffect(() => {
    function closeByEscape(e) {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser({ name, about }) {
    setIsEditProfileProcessing(true);
    api
      .editProfile(name, about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(console.log)
      .finally(() => {
        setIsEditProfileProcessing(false);
      });
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .setUserAvatar(avatar)
      .then((res) => {
        setCurrentUser({ ...currentUser, avatar: res.avatar });
        closeAllPopups();
      })
      .catch(console.log);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);

    if (isLiked) {
      api
        .removeLike(card._id)
        .then((likedCard) => {
          const newCards = cards.map((card) => {
            return card._id === likedCard._id ? likedCard : card;
          });
          setCards(newCards);
        })
        .catch(console.log);
    } else {
      api
        .addLike(card._id)
        .then((likedCard) => {
          const newCards = cards.map((card) => {
            return card._id === likedCard._id ? likedCard : card;
          });
          setCards(newCards);
        })
        .catch(console.log);
    }
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((res) => {
        const newCards = cards.filter((item) => item._id !== card._id);
        setCards(newCards);
      })
      .catch(console.log);
  }

  function handleAddPlaceSubmit(name, url) {
    setIsAddCardProcessing(true);
    api
      .createCard(name, url)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch(console.log)
      .finally(() => {
        setIsAddCardProcessing(false);
      });
  }

  return (
    <UserContext.Provider value={currentUser}>
      <Switch>
        <div className="page">
          <Header />
          <Route path="/signin"><Login onLogin={handleLogin} /></Route>
          <Route path="/signup"><Register onSubmit={handleRegister} /></Route>
          <ProtectedRoute isCheckingToken={isCheckingToken} isLoggedIn={isLoggedIn}><Route path="/main"><Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
            <Footer /></Route></ProtectedRoute>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isEditProfileProcessing}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
            isLoading={isAddCardProcessing}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <PopupWithForm
            name="confirm-delete"
            title="Are you sure?"
            buttonText={"Yes"}
          />{" "}
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
