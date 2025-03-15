import React from "react";
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

export default function Form() {
    return(
        <form className="reg-form">
            <input className="reg-input" placeholder="username"></input>
            <input className="reg-input" placeholder="password"></input>
        </form>
    )
}