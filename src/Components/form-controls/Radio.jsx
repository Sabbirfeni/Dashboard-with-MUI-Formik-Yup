import React from 'react'
import { ErrorMessage, Field } from 'formik';
import FormError from '../FormError';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

function RadioInput(props) {
    const { label, name, options, ...rest } = props;
  return (
    <div className='form-control'>
 
        <Field name={name} {...rest}>
            {
                ({field}) => {
                    return (
                        <FormControl component="fieldset">
                        {/* <FormLabel >Gender</FormLabel> */}
                        <RadioGroup aria-label="gender" name="gender1" value='' onChange={() => console.log('s')}>
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value="other" control={<Radio />} label="Other" />
                          <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                        </RadioGroup>
                      </FormControl>
                    )
                    // return options.map(option => {
                    //     return (
                    //         <React.Fragment key={option.key}>
                    //             <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    //             <input 
                    //             type='radio' 
                    //             id={option.value} 
                    //             {...field} 
                    //             value={option.value} 
                    //             checked={field.value === option.value}
                    //             />
                    //             <label htmlFor={option.value}>{option.key}</label>
                    //         </React.Fragment>
                    //     )
                    // })
                }
            }
        </Field>
        <ErrorMessage name={name} component={FormError}/>
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