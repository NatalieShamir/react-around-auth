import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        onLogin(email, password)
    }

    return (
        <div className="login">
            <p className="login__welcome">Log in</p>
            <form className="login__form" onSubmit={handleLogin}>
                <label for="email">Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} />
                <label for="password">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} />
                <div className="login__button-container">
                    <button type="submit" className="login__link">
                        Log in
                    </button>
                </div>
            </form>

            <div className="login__signup">
                <p>Not a member yet?</p>
                <Link to="/register" className="signup__link">
                    Sign up here!
                </Link>
            </div>
        </div>

    )
}

export { Login }