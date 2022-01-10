import { Formik, FormikHelpers, replace } from 'formik';
import * as Yup from 'yup'
import React, { useState, ReactNode, useContext } from 'react';
import { useMutation, DocumentNode, gql } from "@apollo/client";
import { InputlArea } from '../ui/form-components';
import Button from '../ui/Button';
import styles from './SignInForm.module.css'
import Card from '../ui/Card'
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';
import FlashMessage, { FlashType } from '../ui/FlashMessage';
import Alert from '@mui/material/Alert';
type logInProps = {
    email: string,
    password: string
}

const SignInForm = () => {
    const [isValid, setValid] = useState(true) //boolean representing if a user exists
    const LOGIN_USER = gql`
    mutation Login($email: String!, $password:String!) {
        login(input:{
            identifier:$email,
            password:$password
          }) 
            {
                jwt,
                user{
                  id,
                  username
            }
              }
    }
    `;
    const FORGET_PASSWORD = gql`
    mutation forgetPassword($email:String!){
        forgotPassword(email:$email){
          ok
          }
      }
    `;
    const authCtx = useContext(AuthContext)
    // const [login, { data, loading, error }] = useMutation(LOGIN_USER, { onCompleted: ({ login }) => { console.log(login) } })
    const [showFlash, setShowFlash] = useState(false)
    const [flashContent, setFlashContent] = useState<{ message: string, type: FlashType }>({ message: '', type: 'success' })
    const [login, { loading }] = useMutation(LOGIN_USER);
    const [forgetPassword] = useMutation(FORGET_PASSWORD)
    const navigate = useNavigate();
    if (loading) return <p>Is Loading</p>;
    // if (error) { console.log("invalid user");};
    const handleFprgetPassword = (email: string) => {
        forgetPassword({
            variables: {
                email: email
            }
        }).then(
            ({ data }) => {
                console.log("reset password email sent")
                setFlashContent({ message: 'Reset password email successfully sent', type: 'success' })
                setShowFlash(true)
                setTimeout(() => { setShowFlash(false) }, 3000)
                // return (
                //     <FlashMessage message="Reset password email successfully sent" position={{ vertical: 'bottom', horizontal: 'right' }} type="success" time={3000}></FlashMessage>
                // )
            }
        ).catch(e => {
            console.log("reset password email sent fail")
            setFlashContent({message:'Email sent failed. Please check your email and try again.',type:'error'})
            setShowFlash(true)
            setTimeout(() => { setShowFlash(false) }, 3000)
        })
    }
    return (
        <Card className='signInForm-card' >
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email("please enter a valid email").required('email is required'),
                    password: Yup.string().required("password is required")
                })}
                onSubmit={(values: logInProps, { setSubmitting }: FormikHelpers<logInProps>) => {
                    login({
                        variables: {
                            email: values.email,
                            password: values.password
                        }
                    }).then(
                        ({ data }) => {
                            console.log(data)
                            setValid(true)
                            authCtx.login(data.login.jwt, data.login.user)
                            navigate('/', { replace: true })
                        }
                    ).catch(e => { setValid(false); })
                }
                }
            >
                {formik => {
                    return (
                        <form className={styles['signIn-form']} onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }}>
                            {isValid ? null : <Alert severity="error">Invalid email or password, try again</Alert>}
                            <p>Enter your email and password to login</p>
                            <InputlArea label='Email' className='text-input' name='email' type='email' placeholder=''></InputlArea>
                            {formik.values.email ? <p>Forget your password? Click <span onClick={handleFprgetPassword.bind(null, formik.values.email)}>here</span> to reset</p> : null}
                            <InputlArea label='Password' className='text-input' name='password' type='password' placeholder=''></InputlArea>
                            <Button type="submit" disable={!formik.dirty || !formik.isValid ? true : false}>Log In</Button>
                            {/* {emailSent && <FlashMessage message="Reset password email successfully sent" position={{ vertical: 'bottom', horizontal: 'right' }} type="success" time={6000}></FlashMessage>} */}
                            {showFlash && <FlashMessage open={true} message={flashContent.message} position={{ vertical: 'bottom', horizontal: 'right' }} type={flashContent.type} time={6000}></FlashMessage>}
                        </form>)
                }}
            </Formik>

        </Card>
    );
};

export default SignInForm;