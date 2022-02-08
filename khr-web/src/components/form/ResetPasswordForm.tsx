import { Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup'
import  { useState, useContext } from 'react';
import { useMutation,  gql } from "@apollo/client";
import { InputlArea } from '../ui/form-components';
import MyButton from '../ui/MyButton';
import styles from './SignInForm.module.css'
import Card from '../ui/Card'
import AuthContext from '../../store/auth-context';
import { useNavigate, useSearchParams} from 'react-router-dom';
type ResetProps = {
    password:string,
    passwordConfirmation:string
}

const ResetPasswordForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("code: "+searchParams.get("code"))
    const RESET_PASSWORD = gql`
    mutation resetPassword($password:String!,$passwordConfirmation:String!,$code:String!){
        resetPassword(password:$password,passwordConfirmation:$passwordConfirmation,code:$code){
          jwt,
          user{
            id,
            username
        }
      }
    }
    `;
    const [isValid, setValid] = useState(true)
    const authCtx = useContext(AuthContext)
    // const [login, { data, loading, error }] = useMutation(LOGIN_USER, { onCompleted: ({ login }) => { console.log(login) } })
    const [resetPassword, {loading }] = useMutation(RESET_PASSWORD);
    const navigate = useNavigate();
    if (loading) return <p>Is Loading</p>;
    // if (error) { console.log("invalid user");};

    return (
        <Card className='signInForm-card' >
            <Formik
                initialValues={{ password: '', passwordConfirmation: '' }}
                validationSchema={Yup.object({
                    password: Yup.string().required("password is required"),
                    passwordConfirmation:Yup.string().when("password", {
                        is: (val: string) => (val && val.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Both password need to be the same"
                        )
                    })
                })}
                onSubmit={(values: ResetProps, { setSubmitting }: FormikHelpers<ResetProps>) => {
                        resetPassword({
                            variables: {
                                password: values.password,
                                passwordConfirmation: values.passwordConfirmation,
                                code:searchParams.get("code")
                            }
                        }).then(
                            ({data})=>{
                                console.log(data)
                                setValid(true);
                                if(!authCtx.isLoggedIn) authCtx.login(data.resetPassword.jwt, data.resetPassword.user)
                                navigate('/',{replace:true})
                            }
                        ).catch(e=>{setValid(false); })
                }
                }
            >
                {formik => {
                    return (
                        <form className={styles['signIn-form']} onSubmit={(e) => { e.preventDefault(); formik.handleSubmit() }}>
                           {isValid ? null: <span className={styles.error}>Something goes wrong, try again</span>}
                            <p>Enter your new password and confirmation</p>
                            <InputlArea label='New Password' className='text-input' name='password' type='password' placeholder=''></InputlArea>
                            <InputlArea label='Re-enter Password' className='text-input' name='passwordConfirmation' type='password' placeholder=''></InputlArea>
                            <MyButton type="submit" disable={!formik.dirty || !formik.isValid ? true : false}>Reset Password</MyButton>
                        </form>)
                }}
            </Formik>

        </Card>
    );
};

export default ResetPasswordForm;