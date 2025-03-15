import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"
import Button from "./Button.jsx";
import PostButton from "./PostButton.jsx";

export default function Post(props) {
    // const title = "Post Title";
    const username = props.username
    const content = props.content

    return(
        <div className="post">
            <div className="post-content">
                <div className="post-img">

                </div>
                <div className="post-div">
                    <div className="post-title">
                        {username}
                    </div>
                    <div className="post-text">
                        {content}
                    </div>
                    <div className="post-buttons">
                        <PostButton type = "like" />
                        <PostButton type = "unlike" />
                    </div>
                </div>
            </div>
        </div>
    )
}