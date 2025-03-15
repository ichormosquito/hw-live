import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"
import MenuPanel from "./MenuPanel.jsx"

export default function LeftPanel() {
    return(
        <div className="panel_left">
            <MenuPanel />
        </div>
    )
}