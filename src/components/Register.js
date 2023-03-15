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
            <p className="register__welcome">
                Sign up
            </p>
            <form className="register__form">
                <label>
                    Email
                </label>
                <input name="email" type="email" value={email}
                    onChange={e => setEmail(e.target.value)} />
                <label>
                    Password
                </label>
                <input name="password" type="password" value={password}
                    onChange={e => setPassword(e.target.value)} />
            </form>
            <div className="register__button-container">
                <button onClick={handleSubmit} className="register__link">Sign up</button>
            </div>
            {/* link to login page */}
            <div className="register__signin">
                <p>Already a member?</p>
                <Link to="login" className="register__login-link">Log in here!</Link>
            </div>
        </div>
    )
}

export { Register };