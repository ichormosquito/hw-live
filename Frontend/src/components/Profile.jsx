import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import { URL } from "../constants/url";

export default function Profile() {
    const token = sessionStorage.getItem('token') === null ? null : sessionStorage.getItem('token')
    const [username, setUsername] = useState();
    
    const getUsername = async () => {
        const response = await axios.get(`${URL}/auth/info/${token}`)
        .then((response) => {
            console.log(response)
            setUsername(response.data.user)
        })
    }

    useEffect(() => {
        if(token !== null) {
            getUsername();
        }
    }, [])
    
    return(
        <div>
            { token === null ? <div></div> : 
            ( 
            <div className="profile">
                <div className="circle">

                </div>
                <div>
                    <div className="username">
                        {username}
                    </div>
                    <div className="rolename">
                        {/* role name */}
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}