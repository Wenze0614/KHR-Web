import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup'
import React from 'react';
import { InputlArea } from '../ui/form-components';
import Button from '../ui/Button';
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
                
                <div className={styles.logo}>
                    <img className={styles['KHR-logo']} src={require('../../assets/logo.png')} alt='KHR-logo'></img>
                    <img className={styles['ACNC-logo']} src={require('../../assets/ACNC-logo.png')}alt='ACNC-logo'></img>
                </div>
                <p>Subscribe to our latest News</p>
                <InputlArea label='Email' className='text-input' name='email' type='email' placeholder=''></InputlArea>
                <Button type="submit">Submit</Button>
            </form>
        </Formik>
    );
};

export default SubscriptionForm;