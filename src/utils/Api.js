class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._token = options.token;
  }
}

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-3-en",
  token: {
    authorization: "c38a1131-295f-471c-b53b-3cfda4699ea7",
    "Content-Type": "application/json",
  },
});
