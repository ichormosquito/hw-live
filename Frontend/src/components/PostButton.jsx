import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"
import Like from "../assets/thumbsup.png"
import Unlike from "../assets/thumbsdown.png"

export default function PostButton(props) {
    const type = props.type

    return(
        <div className="post-button">
            <img src={type == "like" ? Like : Unlike}></img>
            <div>{type == "like" ? "Like" : "Unlike"}</div>
        </div>
    )
}