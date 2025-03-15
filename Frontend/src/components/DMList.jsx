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
import Form from "./Form.jsx"

export default function DMList() {

    const token = sessionStorage.getItem('token') === null ? null : sessionStorage.getItem('token')

    return(
        <div className="menu">
            { token === null ? "Login / Register" : "" }
            <hr></hr>
            <Form />
            { token === null ? "" : 
            (<button className="button" onClick={() => { sessionStorage.removeItem('token'); window.location.reload() }}>
                <div style={{marginLeft: "20%"}}>
                    <img src={Logout}></img>
                </div>
                Logout
            </button>) }
            <hr></hr>
        </div>
    )
}