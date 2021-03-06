import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup'
import { useContext, useState } from 'react';
import { InputlArea } from '../ui/form-components';
import MyButton from '../ui/MyButton';
import styles from './SignInForm.module.css'
import Card from '../ui/Card'
import { useMutation, gql } from "@apollo/client";
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';
// import FlashMessage from '../ui/FlashMessage';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
type logInProps = {
    email: string,
    password: string,
    reEnterPassword: string,
    name:string
}
const SignInForm = () => {
    const [isValid, setValid] = useState(true)
    const authCtx = useContext(AuthContext)
    const SIGNUP_USER = gql`
    mutation signup($username:String!,$email: String!, $password:String!) {
        register(input:{
            username:$username,
            email:$email,
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
    const [signup, {loading }] = useMutation(SIGNUP_USER);
    const navigate = useNavigate()
   
    if (loading) return <p>Loading <CircularProgress color="inherit" /></p>;
    return (
        <Card className='signInForm-card' >
            <Formik
                initialValues={{ email: '', password: '', reEnterPassword: '' ,name:''}}
                validationSchema={Yup.object({
                    name:Yup.string().required(),
                    email: Yup.string().email("please enter a valid email").required('email is required'),
                    password: Yup.string().required("password is required"),
                    reEnterPassword: Yup.string().required("please confirm your password").when("password", {
                        is: (val: string) => (val && val.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Both password need to be the same"
                        )
                    })
                })}
                onSubmit={(values: logInProps, { setSubmitting }: FormikHelpers<logInProps>) => {
                    console.log(values)
                    signup({
                        variables: {
                            username:values.name,
                            email: values.email,
                            password: values.password
                        }
                    }).then(
                        ({data})=>{
                            console.log(data)
                            setValid(true)
                            authCtx.login(data.register.jwt, data.register.user)
                            navigate('/',{replace:true})
                        }
                    ).catch(e=>{console.log(e);setValid(false); })
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
                            {isValid ? null: <Alert severity="error">Invalid Email or email has been used</Alert>}
                            <p>Enter your email and password to login</p>
                            <InputlArea label='Name' className='text-input' name='name' type='text' placeholder=''></InputlArea>
                            <InputlArea label='Email' className='text-input' name='email' type='email' placeholder=''></InputlArea>
                            <InputlArea label='Password' className='text-input' name='password' type='password' placeholder=''></InputlArea>
                            <InputlArea label='Confirm Password' className='text-input' name='reEnterPassword' type='password' placeholder=''></InputlArea>
                            <MyButton type="submit" disable={!formik.dirty || !formik.isValid ? true:false}>Sign Up</MyButton>
                        </form>)
                }}
            </Formik>

        </Card >
    );
};

export default SignInForm;