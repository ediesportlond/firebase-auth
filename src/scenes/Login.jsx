import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAp80RWo3IIBBRy3zUSuPsCOXVaULpu3Os",
    authDomain: "fir-auth-ee.firebaseapp.com",
    projectId: "fir-auth-ee",
    storageBucket: "fir-auth-ee.appspot.com",
    messagingSenderId: "654406546745",
    appId: "1:654406546745:web:9eae9e9b3b63a6212ce4e8"
  };

export default function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();
        
        const app = initializeApp(firebaseConfig); //connects to firebase
        const auth = getAuth(app);
        const res = await signInWithEmailAndPassword(auth, email, password)
        .catch(console.error)

        setUser(res.user)
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="yourname@domain.com" />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
        </>

    )
}