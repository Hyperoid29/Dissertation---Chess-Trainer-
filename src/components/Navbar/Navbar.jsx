import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'
import { UserAuth } from '../../context/AuthContext.js';

import "./Navbar.css";

export default function Navbar() {
    const { user, logOut } = UserAuth()

    const handleLogout = async () => {
        try {
            await logOut()
        } catch (error) {

        }
    }

    const [toggleMenu, setToggleMenu] = useState(false);
    return (

        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <a href="/">
                    <img className='logo' src={logo}
                        alt="Avatar" />
                </a>
                <div className="gpt3__navbar-links_container">
                    <p><a href="/">Home</a></p>
                    <p><a href="/guide">Guide</a></p>
                    <p><a href="/ai">Play Vs AI</a></p>
                    <p><a href="/ranked">Ranked</a></p>
                    <p><a href="/analysis">Analyse</a></p>
                    <p><a href="/watch">Watch</a></p>
                    <p><a href="/faq">FAQ</a></p>
                    <p><a href="/analytics">Analytics </a></p>
                    <p><a href="/forumpage">Forum Page </a></p>
                    <p><a href="/leaderboard">Leaderboard </a></p>
                </div>
            </div>
            {user?.email ? <div className="gpt3__navbar-sign" >

                <a href="/profile">
                    <img className="img" src={user.photoURL}
                        alt="Avatar" />
                    <button type="button" onClick={handleLogout}>Logout</button>
                </a>
            </div> :
                <div className="gpt3__navbar-sign" >
                    <a href="/login">
                        <p>Sign in</p>
                    </a>
                    <a href="/login">
                        <button type="button">Sign up</button>
                    </a>
                </div>
            }
            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p><a href="/">Home</a></p>
                            <p><a href="/guide">Guide</a></p>
                            <p><a href="/ai">Play Vs AI</a></p>
                            <p><a href="/ranked">Ranked</a></p>
                            <p><a href="/analysis">Analyse</a></p>
                            <p><a href="/watch">Watch</a></p>
                            <p><a href="/faq">FAQ</a></p>
                            <p><a href="/analytics">Analytics </a></p>
                            <p><a href="/forumpage">Forum Page </a></p>
                            <p><a href="/leaderboard">Leaderboard </a></p>
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}