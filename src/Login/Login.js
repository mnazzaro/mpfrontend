import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './login.css';


function Login (props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleUpdateEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleUpdatePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://127.0.0.1:5000/login', {
            method: "POST",
            cache: "no-store", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        response.json().then((data) => {
            if (data.result) {
                dispatch({ type: 'app/login' });
            } else {
                alert ("Login Attempt Failed");
            }
        });
    }

    return (
        <form id="login-form" onSubmit={handleSubmit}>
            <h1 style={{paddingTop: '35px'}}>Login</h1>
            <div className="inner-container">
                <label>Email:</label><br/>
                <input type="text" id="email" value={email} onChange={handleUpdateEmail}/><br/>
                <label>Password:</label><br/>
                <input type="password" id="password" value={password} onChange={handleUpdatePassword}/><br/>
                <input type="submit" value="Enter"/>
            </div>
        </form>
    );
}

export default Login;