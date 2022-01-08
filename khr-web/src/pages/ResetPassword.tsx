import React, { useState } from 'react'
import ResetPasswordForm from '../components/form/ResetPasswordForm'
import Strip from '../components/strip/Strip'
import styles from './SignIn.module.css'
export default function ResetPassword() {
    return (
        <Strip background="home/home-3.png" darkness='0.3'>
        <div className={styles.signIn}>
            <h2>Reset Your Password</h2>
            <ResetPasswordForm></ResetPasswordForm>
        </div>
        </Strip>
    )
}
