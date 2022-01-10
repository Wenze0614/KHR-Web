import {useField, FieldHookConfig } from 'formik';
import React from 'react';
import styles from './form-components.module.css'
import Alert from '@mui/material/Alert';
interface OtherProps{
    label:string,
    className:string
}
export const InputlArea = (props: OtherProps&FieldHookConfig<string>) => {
    const [field, meta] = useField(props)
    return (
        <div className={styles[`${props.className}`]}>
            <label htmlFor={props.id || props.name} >{props.label} :</label>
            <input  {...field} type={props.type} placeholder={props.placeholder}></input>
            {meta.touched && meta.error ?
                <Alert severity="error">{meta.error}</Alert> : null}
        </div>
    )
}


