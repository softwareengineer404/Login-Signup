import React, { useState } from 'react';
import './LoginSignup.css';
import axios from 'axios';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
const LoginSignup = () => {
    const [action, setAction] = useState("Sign up");
    
    // state to store input values
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const validateForm = () => {
        const newErrors = {};
        if (action === "Sign up" && !name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Enter a valid email";
        if (!password.trim()) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Password must be at least 6 characters";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ---------- SIGNUP FUNCTION ----------
    const handleSignup = () => {
        if(!validateForm()) return;
        axios.post("http://127.0.0.1:8000/api/auth/register/", {
            name: name,
            email: email,
            password: password,
            full_name: name
        })
        .then(res => {
            alert("Signup successful!");
            console.log(res.data);
        })
        .catch(err => {
            alert("Signup failed!");
            console.log(err);
        });
    };

    // ---------- LOGIN FUNCTION ----------
    const handleLogin = () => {
        if(!validateForm()) return;
        axios.post("http://127.0.0.1:8000/api/auth/login/", {
            email: email,
            password: password
        })
        .then(res => {
            alert("Login successful!");
            console.log(res.data);
        })
        .catch(err => {
            alert("Login failed!");
            console.log(err);
        });
    };
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
                        <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                )}
                {errors.name && <p className="error">{errors.name}</p>}
                <div className="input">
                    <img src={email_icon} alt="email"/>
                    <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                {errors.email && <p className="error">{errors.email}</p>}
                <div className="input">
                    <img src={password_icon} alt="password"/>
                    <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                {errors.password && <p className="error">{errors.password}</p>}
            </div>

            {action === "Sign up" ? null : (
                <div className="forget-password">
                    Lost password? <span>Click here</span>
                </div>
            )}

            <div className="submit-container">
                <div 
                    className={action === "Sign up" ? "submit gray" : "submit"} 
                    onClick={() => {
                        if (validateForm()) setAction("Sign up")}}
                        
                >
                    Signup
                </div>
                <div 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => {
                        if (validateForm()) setAction("Login")}}
                        
                >
                    Login
                </div>
            </div>
            
        </div>
    );
}

export default LoginSignup;
