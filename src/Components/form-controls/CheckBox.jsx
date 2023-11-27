import React from 'react'
import { ErrorMessage, Field } from 'formik';
import FormError from '../FormError';

function CheckBox(props) {
    const { label, name, options, ...rest } = props;
  return (
    <div className='form-control'>
        <Field name={name} {...rest}>
            {
                ({field}) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <div style={{ display: 'flex', alignItems: 'center'}}>
                                    <input 
                                    type='checkbox' 
                                    id={option.value} 
                                    {...field} 
                                    value={option.value} 
                                    checked={field.value.includes(option.value)}
                                    style={{ marginRight: '10px', cursor: 'pointer'}}
                                    />
                                    <label htmlFor={option.value} style={{ cursor: 'pointer' }}>{option.key}</label>
                                </div>
                                
                            </React.Fragment>
                        )
                    })
                }
            }
        </Field>
        <ErrorMessage name={name} component={FormError}/>
    </div>
  )
}

export default CheckBox