import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"
import Button from "./Button.jsx";
import Register from "../assets/register.png"
import Login from "../assets/login.png"
import Logout from "../assets/logout.png"

import { URL } from "../constants/url.js";

export default function Form() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const token = sessionStorage.getItem('token') === null ? null : sessionStorage.getItem('token')

    const [formType, setFormType] = useState("register");

    const toggleFormType = type => {
        setFormType(type);
    }

    // console.log(email)
    // console.log(username)
    // console.log(password)

    const handleRegister = async (event) => {
        event.preventDefault();
        const response = await axios.post(`${URL}/auth/register`, {email: email, username: username, password: password})
        .then((response) => {
            console.log(response)
            sessionStorage.setItem('token', response.data.token)
        })
        .catch((err) => { console.log(err) })
        window.location.reload()
    }

    const handleLogin = async (event) => {
        event.preventDefault();
            const response = await axios.post(`${URL}/auth/login`, {email: email, password: password})
        .then((response) => {
            console.log(response)
            sessionStorage.setItem('token', response.data.token)
        })
        .catch((err) => { console.log(err) })
        window.location.reload()
    }

    const handleSubmit = async () => {
        if (formType === "register") {
            handleRegister();
        } else if (formType === "login") {
            handleLogin();
        }
    }

    return(
        <div>
            { token === null ? 
            (<div>
                { formType === "register" ? 
            (
                <div>
                    <form className="reg-form" onSubmit={handleRegister}>
                        <input className="reg-input" type="email" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        <input className="reg-input" type="text" placeholder="username" value={username} onChange={(e) => {setUsername(e.target.value)}} ></input>
                        <input className="reg-input" type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                        
                        <button className="button">
                            <div style={{marginLeft: "20%"}}>
                                <img src={Register}></img>
                            </div>
                            Register
                        </button>
                        {/* <Button icon={Register} title="Register" href="/register" email={email} username={username} password={password} />
                        <Button icon={Login} title="Login" href="/login" email={email} username={username} password={password} /> */}
                    </form>
                    <div>
                        Already have an account? <div onClick={() => { toggleFormType("login") }} style={{cursor: "pointer"}}> Click here. </div>
                    </div>
                </div>
            ):(
                <div>
                    <form className="reg-form" onSubmit={handleLogin}>
                        <input className="reg-input" type="email" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        <input className="reg-input" type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>

                        <button className="button">
                            <div style={{marginLeft: "20%"}}>
                                <img src={Login}></img>
                            </div>
                            Login
                        </button>
                        {/* <Button icon={Register} title="Register" href="/register" email={email} username={username} password={password} />
                        <Button icon={Login} title="Login" href="/login" email={email} username={username} password={password} /> */}
                    </form>
                    <div>
                            Don't have an account? <div onClick={() => { toggleFormType("register") }} style={{cursor: "pointer"}}> Click here. </div>
                    </div>
                </div>
            )}
            </div>) 
            : 
            (<div>

            </div>) }
        </div>
    )
}