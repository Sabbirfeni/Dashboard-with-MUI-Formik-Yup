import React from 'react'
import FormError from '../FormError';
import { ErrorMessage, Field } from 'formik';

function TextArea(props) {
    const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}>{name}</label>
        <Field as='textarea' id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={FormError}/>
    </div>
  )
}

export default TextArea