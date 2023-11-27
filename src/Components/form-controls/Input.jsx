import { ErrorMessage, Field } from 'formik';
import React from 'react'
import FormError from '../FormError';
import { TextField } from '@mui/material';

function Input(props) {
    const { label, name, formik, ...rest } = props;
    const { errors, touched } = formik;
  return (
    <div className='form-control'>
        <Field 
          id={name} 
          name={name} 
          {...rest} 
          label={label} 
          variant="outlined" 
          as={TextField}
          error={Boolean(errors[name]) && Boolean(touched[name])}
          helperText={Boolean(touched[name]) && errors[name]}
          sx={{ width: '100%'}}
        />
        {/* <ErrorMessage name={name} component={FormError}/> */}
    </div>
  )
}

export default Input

{/* <Field name='email' type='email' as={TextField} variant='outlined' color='primary' label='Email' /> */}

// import React from 'react'
// import { MuiTelInput } from 'mui-tel-input'
// import { Field } from 'formik'

// function PhoneInput({ name, label, formik }) {
//     const [value, setValue] = React.useState('')

//     const handleChange = (newValue) => {
//       setValue(newValue)
//     }

//     return (
//         <div className='form-control'>
//             <Field name={name}>
//                 {
//                     ({ form, field }) => {

//                         const { setFieldValue } = form
//                         // console.log(field)
//                         return <MuiTelInput label={label} {...field} onChange={val => setFieldValue(name, val)}/>
//                     }
//                 }
//                 {/* <MuiTelInput name={name} label={label} value={value} onChange={handleChange} /> */}
//             </Field>
//         </div>
//     )
   
// }

// export default PhoneInput