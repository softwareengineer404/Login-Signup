import React, { useState } from 'react';
import './LoginSignup.css';
import axios from 'axios';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
const LoginSignup = () => {
    const [action, setAction] = useState("Sign up");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="user"/>
                        <input type="text" placeholder="Enter your name"/>
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt="email"/>
                    <input type="email" placeholder="Enter email"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="password"/>
                    <input type="password" placeholder="Enter password"/>
                </div>
            </div>

            {action === "Sign up" ? null : (
                <div className="forget-password">
                    Lost password? <span>Click here</span>
                </div>
            )}

            <div className="submit-container">
                <div 
                    className={action === "Sign up" ? "submit gray" : "submit"} 
                    onClick={() => setAction("Sign up")}
                >
                    Signup
                </div>
                <div 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => setAction("Login")}
                >
                    Login
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
