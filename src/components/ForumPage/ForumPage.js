import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ForumPage.css';
import speech from '../../assets/chat.png';
import bin from '../../assets/bin.png';



import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import 'firebase/compat/auth'; // add the auth module

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



export default function ForumPage() {
    const [topics, setTopics] = useState([]);
    const [user, setUser] = useState(null); // add user state

    useEffect(() => {
        // fetch the posts from Firestore
        const unsubscribe = db.collection('posts')
            .orderBy('timestamp', 'asc')
            .onSnapshot((querySnapshot) => {
                const fetchedTopics = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        title: data.title,
                        timestamp: data.timestamp,
                        author: data.author // add the author field to the topic object
                    };
                });
                setTopics(fetchedTopics);
            });
        return unsubscribe;
    }, []);

    useEffect(() => {
        // listen for changes in the user's authentication state
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        // return the unsubscribe function to stop listening for changes
        return unsubscribe;
    }, []);

    const deleteTopic = (id) => {
        if (window.confirm('Are you sure you want to delete this topic?')) {
            db.collection('posts').doc(id).delete()
                .then(() => {
                    console.log('Topic successfully deleted!');
                })
                .catch((error) => {
                    console.error('Error removing topic: ', error);
                });
        }
    };

    return (
        <div className="forum-container">

            <div className="forum-header">
                <h1 className="forum-title">Forums</h1>
                <Link to="/createnewpost" className="forum-button">New Post</Link>
            </div>

            <div className="topic-list">

                {topics.map((topic) => (
                    <div key={topic.id} className="topic-container">
                        <div className="topic-header">
                            <Link to={`/forumpagesub/${topic.id}`} className="topic-link">
                                <h2 className="topic-title">{topic.title}</h2>
                            </Link>
                            {user && (
                                <button className="delete-button" onClick={() => deleteTopic(topic.id)}>
                                    <img className="bin-icon" src={bin} alt="bin icon" />
                                </button>
                            )}

                        </div>
                        <div className="topic-details">
                            <p className="topic-author">Posted by {topic.author && topic.author.email ? topic.author.email : 'Anonymous'}</p>
                            <p className="topic-date">{topic.timestamp.toDate().toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}