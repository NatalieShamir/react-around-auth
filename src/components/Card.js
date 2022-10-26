function Card(props) {
  console.log(props);
  function handleCardImageClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="card">
      <div
        className="card__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleCardImageClick}
      ></div>
      <button type="button" className="card__delete-button"></button>
      <div className="card__info">
        <h2 className="card-title">{props.card.name}</h2>
        <div className="card__likes">
          <button type="button" className="card__like-button"></button>
          <div className="card__likes-amount">{props.card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
