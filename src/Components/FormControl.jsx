import React from 'react'
import Input from './form-controls/Input';
import TextArea from './form-controls/TextArea';
import Select from './form-controls/Select';
import CheckBox from './form-controls/CheckBox';
import DatePickerInput from './form-controls/DatePicker';
import PhoneInputEle from './form-controls/PhoneInput';
import RadioInput from './form-controls/Radio';

function FormikControl(props) {
    const { control, ...rest } = props;
    switch(control) {
        case 'input': return <Input {...rest}/>
        case 'phone': return <PhoneInputEle {...rest}/>
        case 'textarea': return <TextArea {...rest}/>
        case 'select': return <Select {...rest}/>
        case 'radio': return <RadioInput {...rest}/>
        case 'checkbox': return <CheckBox {...rest}/>
        case 'date': return <DatePickerInput {...rest}/>
        default: return null
    }
}

export default FormikControl