export const BASE_URL = "https://register.nomoreparties.co"

export const signup = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then((response) => {
            if (response.status === 201) {
                return response.json();
            }
        })
        .then((res) => {
            return res;
        })
        .catch((err) => console.log(err));
}

export const signin = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.token) {
                localStorage.setItem("token", data.token);
                return data;
            } else {
                return;
            }
        });
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
        .then(res => res.json())
        .then(data => data)
}