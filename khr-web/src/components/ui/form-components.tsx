import {useField, FieldHookConfig } from 'formik';
import React from 'react';
import styles from './form-components.module.css'
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
                <div className={styles['error-message']}>{meta.error}</div> : null}
        </div>
    )
}


