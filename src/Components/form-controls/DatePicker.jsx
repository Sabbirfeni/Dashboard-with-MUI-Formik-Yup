import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field } from 'formik';
import FormError from '../FormError';

function DatePickerInput(props) {
    const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
            {
                ({ form, field }) => {
                    const { setFieldValue } = form;
                    const { value } = field;
                    return <DatePicker
                    id={name}
                    {...field}
                    {...rest}
                    selected={value}
                    onChange={val => setFieldValue(name, val)}
                    />
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