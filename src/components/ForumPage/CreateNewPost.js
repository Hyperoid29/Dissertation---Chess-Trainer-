import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // import Link component from React Router
import './CreateNewPost.css';

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAhdrxhh2mCZwhF7UCGlCN2q7S4zxXr7I8",
    authDomain: "chess-trainer-beaa7.firebaseapp.com",
    projectId: "chess-trainer-beaa7",
    storageBucket: "chess-trainer-beaa7.appspot.com",
    messagingSenderId: "762648153782",
    appId: "1:762648153782:web:ac0992232fd8089e716017",
    measurementId: "G-PXLYD631JD"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();



export default function CreateNewPost() {
    const [posts, setPosts] = useState([]);
    const history = useNavigate(); // instantiate useHistory

    // handle form submit
    const handlePostSubmit = (event) => {
        event.preventDefault();

        // create a new post object
        const newPost = {
            title: event.target.title.value,
            content: event.target.content.value,
            timestamp: firebase.firestore.Timestamp.now(),
        };

        // add the new post to the Firestore database
        db.collection("posts")
            .add(newPost)
            .then(() => {
                console.log("New post added to Firestore");
                // clear the form fields
                event.target.title.value = "";
                event.target.content.value = "";
                // route to forum page
                history.push("/forumpage");
            })
            .catch((error) => {
                console.error("Error adding new post to Firestore:", error);
            });

        // fetch all posts from Firestore after adding a new post
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => {
                const posts = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    data.id = doc.id;
                    posts.push(data);
                });
                setPosts(posts);
            });
    };

    return (
        <div className="forum-container">
            <div className="forum-header">
                <h1 className="forum-title">Forums</h1>
                <Link to="/forumpage" className="forum-button">
                    Go Back
                </Link>
            </div>

            <form className="new-post-form" onSubmit={handlePostSubmit}>
                <input
                    className="form-input"
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter post title"
                    required
                />
                <textarea
                    className="form-input"
                    id="content"
                    name="content"
                    placeholder="Enter post content"
                    required
                ></textarea>

                <button className="form-submit" type="submit">
                    Submit
                </button>

            </form>
            <div className="post-list">
                {posts.map((post, index) => (
                    <div key={index} className="post-container">
                        <div className="post-header">
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-author">
                                Posted by User on {post.timestamp.toDate().toLocaleString()}
                            </p>
                        </div>
                        <p className="post-content">{post.content}</p>
                    </div>
                ))}
            </div>
        </div>



    )


}

