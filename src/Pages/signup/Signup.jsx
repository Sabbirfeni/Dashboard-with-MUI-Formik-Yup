import React from 'react'
import './signup.css'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../Components/FormControl'
import { Box } from '@mui/material'
import "yup-phone-lite";

function Signup() {

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    gender: ''
  }
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
  const validarionSchema = Yup.object({
    fullName: Yup.string().min(2, 'Name is too short').required('Requred'),
    email: Yup.string().email('Please enter a valid email').required('Required'),
    phone: Yup.string()
    .phone("US", "Please enter a valid phone number")
    .required("A phone number is required"),
    gender: Yup.string().required('Required')
  })
  const onSubmit = (values) => {
    console.log(values)
  }

  const genderOption = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' }
  ]

  return (
    <div className='MaterialForm'>
      <Formik
        initialValues={initialValues}
        validationSchema={validarionSchema}
        onSubmit={onSubmit}
      >
        {
          (formik) => {
            console.log(formik)
            return (
              <Form>
                  <FormikControl control='input' name='fullName' label='Full Name' type='text' formik={formik}/>
                  <Box height={16}/>
                  <FormikControl control='input' name='email' label='Email' type='email' formik={formik}/>
                  <Box height={16}/>
                  <FormikControl control='phone' name='phone' label='Phone'/>
                  <Box height={16}/>
                  <FormikControl control='radio' name='gender' label='Gender' options={genderOption}/>
                  <button type='submit' >Submit</button>
              </Form>
            )
          }
        }
      </Formik>
    </div>

  )
}

export default Signup


// Sign up as a student

// Full Name
// Email
// Mobile number
// Gender
// Subjects (3 subject limit)
// Password
// Confirm Passowrd
// Date