import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field } from 'formik';
import FormError from '../FormError';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { FormControl } from '@mui/material';
function DatePickerInput(props) {
    const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
        <Field name={name}>
            {
                ({ form, field }) => {
                    const { setFieldValue, errors, touched } = form;
                    
                    const { value } = field;
                    return (
                        <FormControl sx={{  }} component="fieldset" variant="standard">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer  components={['DatePicker']}>
                                    <DatePicker 
                                    
                                        label={label} 
                                        id={name}
                                        {...field}
                                        value={value}
                                        onChange={val => setFieldValue(name, val)}
                                        onBlur={() => console.log('d')}
                                        slotProps={{
                                            textField: {
                                            helperText: errors[name],
                                            },
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </FormControl>
                        )
                   
                    // return <DatePicker
                    // id={name}
                    // {...field}
                    // {...rest}
                    // selected={value}
                    // onChange={val => setFieldValue(name, val)}
                    // />
                }
            }
        </Field>
        <ErrorMessage name={name} component={FormError}/>
    </div>
  )
}

export default DatePickerInput

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// // CSS Modules, react-datepicker-cssmodules.css
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// const DatePickerInput = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
// };

// export default DatePickerInput