import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup'
import React from 'react';
import { InputlArea } from './form-components';
import Button from '../ui/Button';
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
            <form>
                <InputlArea label='Email' className='text-input' name='email' type='email' placeholder=''></InputlArea>
                <Button type="submit">Submit</Button>
            </form>
        </Formik>
    );
};

export default SubscriptionForm;