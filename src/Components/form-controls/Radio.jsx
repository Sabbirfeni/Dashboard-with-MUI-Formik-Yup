import React from 'react'
import { ErrorMessage, Field } from 'formik';
import FormError from '../FormError';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material';

function RadioInput(props) {
    const { label, name, options, ...rest } = props;
  return (
    <div className='form-control'>
 
        <Field name={name} {...rest}>
            {
                ({ field, form }) => {
                  const { errors, touched } = form;
                    return (
                        <FormControl component="fieldset" error={Boolean(errors[name]) && Boolean(touched[name])}>
                          <FormLabel id="demo-error-radios">{label}</FormLabel>
                        {/* <FormLabel >Gender</FormLabel> */}
                        <RadioGroup aria-label="gender" name={name} >
                          {
                            options.map(option => {
                              return (
                                  <FormControlLabel key={option.key} {...field}  value={option.value} control={<Radio />} label={option.key} /> 
                              )
                            })
                          }
                        </RadioGroup>
                        <FormHelperText>{Boolean(touched[name]) && errors[name]}</FormHelperText>
                      </FormControl>
                    )
                }
            }
        </Field>
    </div>
  )
}

export default RadioInput








// import React from 'react'
// import { ErrorMessage, Field } from 'formik';
// import FormError from '../FormError';
// import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';

// function Radio(props) {
//     const { label, name, options, ...rest } = props;
//   return (
//     <div className='form-control'>
 
//         <Field name={name} {...rest}>
//             {
//                 ({field}) => {
//                     // return options.map(option => {
//                         return (
//                             <>
//                                 <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//                                 <RadioGroup
//                                     aria-labelledby="demo-radio-buttons-group-label"
//                                     defaultValue="female"
//                                     name="radio-buttons-group"
//                                 >
//                                     <FormControlLabel value="female" control={<Radio />} label="Female" />
//                                     <FormControlLabel value="male" control={<Radio />} label="Male" />
//                                     <FormControlLabel value="other" control={<Radio />} label="Other" />
//                                 </RadioGroup>
//                             </>
                            

//                         )
//                     // })
//                 }
//             }
//         </Field>
//         <ErrorMessage name={name} component={FormError}/>
//     </div>
//   )
// }

// export default Radio