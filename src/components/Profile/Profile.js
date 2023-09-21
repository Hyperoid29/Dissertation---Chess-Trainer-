import React, { useState, useEffect } from 'react';
import "./Profile.css";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import illustration from '../../assets/FAQ.png'
import { db, auth } from '../../firebase';
import { arrayUnion, doc, updateDoc, increment, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';
import { UserAuth } from '../../context/AuthContext';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import user from '../../assets/user.png'
function Profile() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const userCollectionRef = collection(db, 'users');
                const userDocRef = doc(userCollectionRef, user.email);

                getDoc(userDocRef)
                    .then((doc) => {
                        if (doc.exists()) {
                            const userData = doc.data();
                            setEmail(userData.email);
                            setUsername(userData.username);
                        } else {
                            console.log('No such document!');
                        }
                    })
                    .catch((error) => {
                        console.log('Error getting document:', error);
                    });
            } else {
                setEmail('');
                setUsername('');
            }
        });

        return unsubscribe;
    }, []);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        setEditing(false);
        const userCollectionRef = collection(db, 'users');
        const userDocRef = doc(userCollectionRef, email);
        updateDoc(userDocRef, { username: username })
            .then(() => {
                console.log('Document successfully updated!');
            })
            .catch((error) => {
                console.error('Error updating document: ', error);
            });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    return (
        <div className="container">
            <div className="container-box">
                <div className="col-md-8">
                    <div className="jumbotron">
                        <h4>Profile</h4>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    value={email}
                                    onChange={handleEmailChange}
                                    readOnly={!editing}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleUsername">Username</Label>
                                <Input
                                    type="username"
                                    name="username"
                                    id="exampleUsername"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    readOnly={!editing}
                                />
                            </FormGroup>
                            {editing ? (
                                <div className="button">
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={handleSaveClick}
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <div className="button">
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={handleEditClick}
                                    >
                                        Edit
                                    </button>

                                </div>

                            )}

                            {/*
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Password" readOnly={true} />
                </FormGroup>
                */}
                        </Form>
                    </div>
                </div>
                <div className="circle">
                    <img className="logo" src={user} alt="Avatar" />
                </div>
            </div>
        </div>
    );
}

export default Profile  