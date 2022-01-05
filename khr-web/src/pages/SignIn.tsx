import React, { useState } from 'react'
import SignInForm from '../components/form/SignInForm'
import SignUpForm from '../components/form/SignUpForm'
import Strip from '../components/strip/Strip'
import styles from './SignIn.module.css'
export default function SignIn() {
    const [isSignIn, setSignIn] = useState(true)

    return (
        <Strip background="home/home-3.png" darkness='0.3'>
            {isSignIn ? <div className={styles.signIn}>
                <h2>Log in to our site</h2>
                <SignInForm/>
                <p>Don't have an account? Click <span onClick={() => { setSignIn(false) }}>here</span> to sign up!</p>
            </div> :
                <div className={styles.signIn}>
                    <h2>Sign Up to our site</h2>
                    <SignUpForm />
                    <p>Already have an account? Click <span onClick={() => { setSignIn(true) }}>here</span> to log in!</p>
                </div>
            }

        </Strip>
    )
}
