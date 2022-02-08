import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup'
import { InputlArea } from '../ui/form-components';
import MyButton from '../ui/MyButton';
import styles from './SubscriptionForm.module.css'
type subscriptionProps = {
    email: string
}
const SubscriptionForm = () => {
    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email("please enter a valid email").required('email is required')
            })}
            onSubmit={(values: subscriptionProps, { setSubmitting }: FormikHelpers<subscriptionProps>) => { console.log(values) }}>
            <form className={styles['subscription-form']}>
                <p>Subscribe to our latest News</p>
                <InputlArea label='Email' className='text-input' name='email' type='email' placeholder=''></InputlArea>
                <MyButton type="submit">Submit</MyButton>
            </form>
        </Formik>
    );
};

export default SubscriptionForm;