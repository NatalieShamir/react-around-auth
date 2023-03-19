import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            onSubmit()
        }

    }

    return (
        <div className="register">

            <form className="register__form">
                <h3 className="register__welcome">
                    Sign up
                </h3>
                <label for="email"></label>
                <input name="email" type="email" id="email-input" className="register__input" placeholder="Email" value={email}
                    onChange={e => setEmail(e.target.value)} />
                <label for="password"></label>
                <input name="password" type="password" id="password-input" className="register__input" placeholder="Password" value={password}
                    onChange={e => setPassword(e.target.value)} />
                <div className="register__button-container">
                    <button onClick={handleSubmit} className="register__link">Sign up</button>
                </div>
            </form>

            {/* link to login page */}
            <div className="register__signin">
                <p className="register__signin-text">Already a member?</p>
                <Link style={{ textDecoration: 'none' }} to="/signin" className="register__login-link">Log in here!</Link>
            </div>
        </div>
    )
}

export { Register };