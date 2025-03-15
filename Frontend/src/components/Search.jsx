import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"

export default function SearchBar() {
    return(
        <form>
            <img src={Hamburger}></img>
            <input className="search" type="search" placeholder="Search for Post / User here..."></input>
            <img src={Search}></img>
        </form>
    )
}