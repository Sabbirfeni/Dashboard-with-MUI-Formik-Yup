import { ErrorMessage, Field } from 'formik';
import React from 'react'
import FormError from '../FormError';

function Select(props) {
    const { label, name, options, ...rest } = props;

  return (
    <div className='form-control'>
        <label htmlFor={name}>{name}</label>
        <Field as='select' id={name} name={name} {...rest}>
            {
                options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })
            }
        </Field>
        <ErrorMessage name={name} component={FormError}/>
    </div>
  )
}

export default Select