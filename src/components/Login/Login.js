import React, { useState } from 'react';
import * as Components from './Components.js';
import "./styles.css";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../../firebase'
import { UserAuth } from '../../context/AuthContext.js';
import { GoogleAuthProvider } from 'firebase/auth'
import { db } from '../../firebase';
import { Link, useHistory } from 'react-router-dom'


export default function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { user, logIn, signUp } = UserAuth();
    const [currentUserData, setCurrentUserData] = useState(null);



    //sign in with Goopgle
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result.user)

        } catch (error) {
            console.log(error)
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await logIn(email, password)
        } catch (error) {
            console.log(error);
            setError(error.message)
        }
    };

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password, username);

        } catch (error) {
            console.log(error);
        }

    };



    const [signIn, toggle] = React.useState(true);

    return (

        <Components.Container>
            <Components.SignUpContainer>
                <Components.Form onSubmit={handleSubmitSignUp}>

                    <Components.Title>Create Account</Components.Title>
                    <Components.Input onChange={(e) => setUsername(e.target.value)} type='text' placeholder='Username' />
                    <Components.Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                    <Components.Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />

                    <Components.Button  >Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                {error ? <p>{error}</p> : null}
                <Components.Form onSubmit={handleSubmit}>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                    <Components.Input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />

                    <Components.Button>Sigin In</Components.Button>

                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>

                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>

                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>

    );
}








