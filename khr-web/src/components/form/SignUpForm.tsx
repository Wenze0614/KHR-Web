import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup'
import React, { useState } from 'react';
import { InputlArea } from '../ui/form-components';
import Button from '../ui/Button';
import styles from './SignInForm.module.css'
import Card from '../ui/Card'
type logInProps = {
    email: string,
    password: string,
    reEnterPassword: string,
    name:string
}
const SignInForm = () => {

    return (
        <Card className='signInForm-card' >
            <Formik
                initialValues={{ email: '', password: '', reEnterPassword: '' ,name:''}}
                validationSchema={Yup.object({
                    name:Yup.string().required(),
                    email: Yup.string().email("please enter a valid email").required('email is required'),
                    password: Yup.string().required("password is required"),
                    reEnterPassword: Yup.string().when("password", {
                        is: (val: string) => (val && val.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Both password need to be the same"
                        )
                    })
                })}
                onSubmit={(values: logInProps, { setSubmitting }: FormikHelpers<logInProps>) => {
                    console.log(values)
                }}
            >
                {/* <form className={styles['signIn-form']}>
                    <p>Enter your email and password to login</p>
                    <InputlArea label='Email' className='text-input' name='email' type='email' placeholder=''></InputlArea>
                    <InputlArea label='Password' className='text-input' name='password' type='password' placeholder=''></InputlArea>
                    <InputlArea label='Confirm Password' className='text-input' name='reEnterPassword' type='password' placeholder=''></InputlArea>
                    <Button type="submit" >Sign Up</Button>
                </form> */}
                {formik => {
                    return (
                        < form className={styles['signIn-form']} onSubmit={(e)=>{e.preventDefault(); formik.handleSubmit()}} >
                            <p>Enter your email and password to login</p>
                            <InputlArea label='Name' className='text-input' name='name' type='text' placeholder=''></InputlArea>
                            <InputlArea label='Email' className='text-input' name='email' type='email' placeholder=''></InputlArea>
                            <InputlArea label='Password' className='text-input' name='password' type='password' placeholder=''></InputlArea>
                            <InputlArea label='Confirm Password' className='text-input' name='reEnterPassword' type='password' placeholder=''></InputlArea>
                            <Button type="submit" disable={!formik.dirty || !formik.isValid ? true:false}>Sign Up</Button>
                        </form>)
                }}
            </Formik>

        </Card >
    );
};

export default SignInForm;