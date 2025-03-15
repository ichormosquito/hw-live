import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"

export default function Navbar() {
    return(
        <div className="navbar">
            <div>
                <img className="icon" src={Icon}></img>
            </div>
            <div>
                <SearchBar />
            </div>
            <Profile />
        </div>
    )
}