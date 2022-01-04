import React from 'react'
import SignInForm from '../components/form/SignInForm'
import Strip from '../components/strip/Strip'
import styles from './SignIn.module.css'
export default function SignIn() {
    return (
        <Strip background="home/home-3.png" darkness='0.3'>
            <div className={styles.signIn}>
                <h2>Log in to our site</h2>
                <SignInForm />
            </div>
        </Strip>
    )
}
