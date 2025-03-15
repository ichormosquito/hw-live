import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"
import DMList from "./DMList.jsx";

export default function RightPanel() {
    return(
        <div className="panel_right">
            <DMList />
        </div>
    )
}