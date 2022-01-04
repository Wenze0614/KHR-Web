import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup'
import React, { useState } from 'react';
import { InputlArea } from '../ui/form-components';
import Button from '../ui/Button';
import styles from './SignInForm.module.css'
import Card from '../ui/Card'
type logInProps = {
    email: string,
    password: string
}
const SignInForm = () => {

    return (
        <Card className='signInForm-card' >
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email("please enter a valid email").required('email is required'),
                    password: Yup.string().required("password is required")
                })}
                onSubmit={(values: logInProps, { setSubmitting }: FormikHelpers<logInProps>) => {
                    console.log(values)
                }}
            >
                {formik => {
                    return (
                        <form className={styles['signIn-form']} onSubmit={(e)=>{e.preventDefault(); formik.handleSubmit()}}>
                            <p>Enter your email and password to login</p>
                            <InputlArea label='Email' className='text-input' name='email' type='email' placeholder=''></InputlArea>
                            <InputlArea label='Password' className='text-input' name='password' type='password' placeholder=''></InputlArea>
                            <Button type="submit" disable={!formik.dirty || !formik.isValid ? true:false}>Log In</Button>
                        </form>)
                }}
             </Formik>

        </Card>
    );
};

export default SignInForm;