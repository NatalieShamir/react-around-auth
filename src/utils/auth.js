export const BASE_URL = "https://register.nomoreparties.co"

export const signin = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        body: {
            password, email
        }
    })
}

export const signup = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        body: {
            password, email
        }
    })
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}
