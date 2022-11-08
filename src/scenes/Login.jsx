import { useState } from 'react';

export default function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" value={email} onChange={e=> setEmail(e.target.value)} placeholder="yourname@domain.com" />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
        </>

    )
}