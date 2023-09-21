import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { setDoc, doc, collection, getDoc } from 'firebase/firestore'

const AuthContext = createContext();


export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});

    function signUp(email, password, username) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userEmail = user.email;

                setDoc(doc(db, "users", userEmail), {
                    email: userEmail,
                    username: username,
                });

                const now = new Date();
                const currentMonth = now.getMonth() + 1;
                const currentYear = now.getFullYear();

                const userDataRef = doc(db, "users", userEmail, `${currentYear}/${currentMonth}`);
                getDoc(userDataRef)
                    .then((docSnapshot) => {
                        if (!docSnapshot.exists()) {
                            setDoc(userDataRef, {
                                matches: 0,
                                wins: 0,
                                losses: 0,
                            });
                        }
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.error(`Error getting document: ${errorCode} - ${errorMessage}`);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(`Error creating user: ${errorCode} - ${errorMessage}`);
            });
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    });

    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext(AuthContext);
}