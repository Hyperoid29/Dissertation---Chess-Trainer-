// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhdrxhh2mCZwhF7UCGlCN2q7S4zxXr7I8",
    authDomain: "chess-trainer-beaa7.firebaseapp.com",
    projectId: "chess-trainer-beaa7",
    storageBucket: "chess-trainer-beaa7.appspot.com",
    messagingSenderId: "762648153782",
    appId: "1:762648153782:web:ac0992232fd8089e716017",
    measurementId: "G-PXLYD631JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app)


