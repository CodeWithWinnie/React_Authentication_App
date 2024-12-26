import React, { useState } from "react";
import "../index.css";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useAuth()

    const handleLogin = async() => {
        try {
            const response = await login({email, password});
            console.log(response)
            alert("Login Successful!");
            window.location('/')
        } catch (error) {
            alert("Login failed! Please check your details.",error);
        }
    }

    return (
        <div className="login-container">
            <div className="form-section">
                <h1>Welcome Back!</h1>
                <h2>Log In to your account</h2>

                <form onSubmit={handleLogin}>
                    <label>Email Address</label>
                    <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} required placeholder="Enter your email address" /> 

                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} required placeholder="Enter your password"/>

                    <button type="submit">Sign In</button>
                </form>
                <p><a href="/register">Forgot password?</a></p>
                <p>Don't have an account? <a href="./signup">Sign up</a></p>
            </div>
            <div className="info-section">
                <div className="logo-circle"></div>
                <h2>LOGO</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    );
};

export default Login;
