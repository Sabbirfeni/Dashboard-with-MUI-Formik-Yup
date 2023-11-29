// import React from 'react'
// import { ErrorMessage, Field } from 'formik';
// import FormError from '../FormError';

// function CheckBox(props) {
//     const { label, name, options, ...rest } = props;
//   return (
//     <div className='form-control'>
//         <Field name={name} {...rest}>
//             {
//                 ({field}) => {
//                     return options.map(option => {
//                         return (
//                             <React.Fragment key={option.key}>
//                                 <div style={{ display: 'flex', alignItems: 'center'}}>
//                                     <input 
//                                         type='checkbox' 
//                                         id={option.value} 
//                                         {...field} 
//                                         value={option.value} 
//                                         checked={field.value.includes(option.value)}
//                                         style={{ marginRight: '10px', cursor: 'pointer'}}
//                                     />
//                                     <label htmlFor={option.value} style={{ cursor: 'pointer' }}>{option.key}</label>
//                                 </div>
                                
//                             </React.Fragment>
//                         )
//                     })
//                 }
//             }
//         </Field>
//         <ErrorMessage name={name} component={FormError}/>
//     </div>
//   )
// }

// export default CheckBox








import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';
import { Field } from 'formik';
import React from 'react'

function CheckBox({ label, name, options, ...rest }) {
  return (

    <Field name={name} {...rest}>
        {
            ({ field, form }) => {
                const { errors, touched } = form;
                return (
                    <FormControl sx={{  }} component="fieldset" variant="standard" error={Boolean(errors[name]) && Boolean(touched[name])}>
                        <FormLabel component="legend">{label}</FormLabel>
                        <FormGroup name={name}>
                            {
                                options.map(option => {
                                    return (
                                        <FormControlLabel
                                            key={option.key}
                                            control={
                                            <Checkbox {...field} value={option.value}/>
                                            }
                                            label={option.key}
                                        />
                                    )
                                })
                            }
                           
                        </FormGroup>
                        <FormHelperText>{Boolean(touched[name]) && errors[name]}</FormHelperText>
                    </FormControl>
                )
            }
        }
        
    </Field>

  )
}

export default CheckBox