import {useField, FieldHookConfig } from 'formik';
import React from 'react';

interface OtherProps{
    label:string,
    className:string
}
export const InputlArea = (props: OtherProps&FieldHookConfig<string>) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.id || props.name}>{props.label}</label>
            <input className={props.className} {...field} type={props.type} placeholder={props.placeholder}></input>
            {meta.touched && meta.error ?
                <div className='error-message'>{meta.error}</div> : null}
        </>
    )
}


