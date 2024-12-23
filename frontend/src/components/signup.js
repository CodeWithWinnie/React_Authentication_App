import React, { useState } from "react";
import "../index.css";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatpassword, setrepeatPassword] = useState('')
    const {register} = useAuth()

    const handleRegister = async() => {
        if (password != repeatpassword) {
            alert("Password does not match! Retype password.");
        }
        try {
            const response = await register(username, email, password);
            alert("Signup Successful!");
        } catch (error) {
            alert("Signup failed! Please check your details.");
        }
    }

    return (
        <div className="signup-container">
            <div className="form-section">
                <h1>Create a Free Account</h1>

                <form onSubmit={handleRegister}>
                    <label>UserName</label>
                    <input type="username" value={username} onChange={(e) =>setUserName(e.target.value)} required placeholder="Enter your Username" />

                    <label>Email Address</label>
                    <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} required placeholder="Enter your email address" />

                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} required placeholder="Enter your password" />

                    <label>Repeat Password</label>
                    <input type="password" value={repeatpassword} onChange={(e) =>setrepeatPassword(e.target.value)} required placeholder="Enter your password again" />

                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="./login">Sign In</a></p>
            </div>
            <div className="info-section">
                <div className="logo-circle"></div>
                <h2>LOGO</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ,<br/> sed do eiusmod tempor. </p>
            </div>
        </div>
    );
};

export default Signup;