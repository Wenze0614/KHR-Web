import { Formik, FormikHelpers, replace } from 'formik';
import * as Yup from 'yup'
import React, { useState, ReactNode, useContext } from 'react';
import { useMutation, DocumentNode, gql } from "@apollo/client";
import { InputlArea } from '../ui/form-components';
import Button from '../ui/Button';
import styles from './SignInForm.module.css'
import Card from '../ui/Card'
import AuthContext from '../../store/auth-context';
import { useNavigate} from 'react-router-dom';
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
    const authCtx = useContext(AuthContext)
    // const [login, { data, loading, error }] = useMutation(LOGIN_USER, { onCompleted: ({ login }) => { console.log(login) } })
    const [login, {loading }] = useMutation(LOGIN_USER);
    const navigate = useNavigate();
    if (loading) return <p>Is Loading</p>;
    // if (error) { console.log("invalid user");};

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
                            ({data})=>{
                                console.log(data)
                                setValid(true)
                                authCtx.login(data.login.jwt, data.login.user)
                                navigate('/',{replace:true})
                            }
                        ).catch(e=>{setValid(false); })
                }
                }
            >
                {formik => {
                    return (
                        <form className={styles['signIn-form']} onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }}>
                           {isValid ? null: <span className={styles.error}>Invalid email or password, try again</span>}
                            <p>Enter your email and password to login</p>
                            <InputlArea label='Email' className='text-input' name='email' type='email' placeholder=''></InputlArea>
                            <InputlArea label='Password' className='text-input' name='password' type='password' placeholder=''></InputlArea>
                            <Button type="submit" disable={!formik.dirty || !formik.isValid ? true : false}>Log In</Button>
                        </form>)
                }}
            </Formik>

        </Card>
    );
};

export default SignInForm;