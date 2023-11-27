import React from 'react'
import { MuiTelInput } from 'mui-tel-input'
import { Field } from 'formik'


function PhoneInput({ name, label, ...rest }) {
    const [value, setValue] = React.useState('')

    const handleChange = (newValue) => {
      setValue(newValue)
    }

    return (
        <div className='form-control'>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue, errors, touched } = form
                        return <MuiTelInput 
                        label={label} 
                        {...field} 
                        defaultCountry='US'
                        error={Boolean(errors[name]) && Boolean(touched[name])}
                        helperText={Boolean(touched[name]) && errors[name]}
                        onChange={val => setFieldValue(name, val)}
                        sx={{ width: '100%' }}
                        />
                    }
                }
            </Field>
        </div>
    )
   
}

export default PhoneInput