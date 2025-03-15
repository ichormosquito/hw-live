import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import Login from "../assets/login.png"
import Logout from "../assets/logout.png"
import Posts from "../assets/posts.png"
import Register from "../assets/register.png"
import Send from "../assets/send.png"
import Settings from "../assets/settings.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"
import Button from "./Button.jsx";

export default function MenuPanel() {
    return(
        <div className="menu">
            Menu
            <hr></hr>
            <Button icon={Posts} title="Posts" href="/posts" />
            <Button icon={Settings} title="Settings" href="/settings" />
            <hr></hr>
        </div>
    )
}