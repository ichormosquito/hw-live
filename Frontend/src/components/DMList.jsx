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
    return(
        <div className="menu">
            Login / Register
            <hr></hr>
            <Form />
            <Button icon={Register} title="Register" href="/register" />
            <Button icon={Login} title="Login" href="/login"/>
            {/* <Button icon={Logout} title="Logout" href="/logout" /> */}
            <hr></hr>
        </div>
    )
}