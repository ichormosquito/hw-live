import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"

export default function Button(props) {
    const icon = props.icon
    const title = props.title
    const href = props.href

    const email = props.email
    const username = props.username
    const password = props.password

    return(
        <div className="button">
            <div style={{marginLeft: "20%"}}>
                <img src={icon}></img>
            </div>
            <div href={href}>{title}</div>
        </div>
    )
}