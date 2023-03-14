import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        onLogin(email, password)
    }

    return (
        <form className="login__form" onSubmit={handleLogin}>
            <h3 className="login__form-title">Log in</h3>
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <input value={password} onChange={e => setPassword(e.target.value)} />
        </form>

    )
}

export { Login }