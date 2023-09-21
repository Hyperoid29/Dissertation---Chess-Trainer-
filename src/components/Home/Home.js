import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import ai from '../../assets/ai.png';


export default function Home() {
    return (
        <div className="header section__padding" id="home">
            <div className="header-content">
                <h1 className="gradient__text">Let&apos;s Build Something amazing with Chess Trainer</h1>
                <p>Whether you're a beginner just starting out or an experienced
                    player looking to refine your strategies, our application has something for
                    everyone. So why wait? Learn and experience the chess application today and start sharpening
                    your skills!</p>

                <p>Sign Up Now!</p>

                <div className="header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <a href="/login">
                        <button type="button">Get Started</button>
                    </a>
                </div>
            </div>
            <div className="header-image">
                <img src={ai} />
            </div>


        </div>
    );
}