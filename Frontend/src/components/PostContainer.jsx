import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Send from "../assets/send.png"
import Hamburger from "../assets/hamburger.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"
import Button from "./Button.jsx";
import Post from "./Post.jsx"
import { URL } from "../constants/url.js";


export default function PostContainer() {
    const token = sessionStorage.getItem('token') === null ? null : sessionStorage.getItem('token')
    const [username, setUsername] = useState();
    const [content, setContent] = useState();
    const [user_id, setID] = useState();
    const [posts, setPosts] = useState();

    console.log(user_id)

    const getUserInfo = async () => {
        const response = await axios.get(`${URL}/auth/info/${token}`)
        .then((response) => {
            setUsername(response.data.user)
            setID(response.data.id)
        })
    }

    const getPosts = async () => {
        const response = axios.get(`${URL}/posts`)
        .then((response) => {
            setPosts(response.data)
        })
    }

    const createPost =  async () => {
        const response = axios.post(`${URL}/posts/create`, {content: content, username: username, id: user_id})
        .then((response) => {
            console.log(response)
        })
    }

    useEffect(() => {
        getUserInfo();
        getPosts();
    }, [])

    return(
        <div>
            <div className="post-container">
                <div className="posts">
                    {posts?.map(post => (
                        <Post content={post.content} username={post.username}/>
                    ))}
                </div>
                <form className="post-form" onSubmit={createPost}>
                    <input className="post-input" placeholder="Type here to make a post..." value={content} onChange={(e) => {setContent(e.target.value)}}>

                    </input>
                    <button className="post-submit-button">
                        <img src={Send} style={{height: "100%"}}></img>
                        <div style={{fontSize: "10pt", color: "white"}}>Send</div>
                    </button>
                </form>
            </div>
        </div>
    )
}