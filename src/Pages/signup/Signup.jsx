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
    gender: '',
    skill: [],
    password: '',
    confirmPassword: '',
    date: null
  }

  const validarionSchema = Yup.object({
    fullName: Yup.string().min(2, 'Name is too short').required('Requred'),
    email: Yup.string().email('Please enter a valid email').required('Required'),
    phone: Yup.string()
    .phone("US", "Please enter a valid phone number")
    .required("A phone number is required"),
    gender: Yup.string().required('Required'),
    skill: Yup.array().min(3, 'Minimum 3 skills required'),
    password: Yup.string().min(8, 'Password should be atleast 8 character longer')
    .matches(/[a-z]/, "Password must contain at least 1 lower case letter" )
    .matches(/[A-Z]/, "Password must contain at least 1 upper case letter" )
    .matches(/[1-9]/, "Password must contain at least 1 number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/g, "One special charater required")
    .required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password should be matched').required('Required'),
    date: Yup.date().required('Required')
  })
  const onSubmit = (values) => {
    console.log(values)
  }

  const genderOptions = [
    { key: 'Male', value: 'male' },
    { key: 'Female', value: 'female' }
  ]

  const skillOptions = [
    { key: 'HTML', value: 'html' },
    { key: 'CSS', value: 'css' },
    { key: 'JavaScript', value: 'javascript' },
    { key: 'React', value: 'react' },
    { key: 'PHP', value: 'php' },
    { key: 'MySql', value: 'mysql' },
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
                  <FormikControl control='radio' name='gender' label='Gender' options={genderOptions}/>
                  <FormikControl control='checkbox' name='skill' label='Skills' options={skillOptions}/>
                  <Box height={16}/>
                  <FormikControl control='input' name='password' label='Password' type='password' formik={formik}/>
                  <Box height={16}/>
                  <FormikControl control='input' name='confirmPassword' label='Confirm Password' type='password' formik={formik}/>
                  <FormikControl control='date' name='date' label='Date' type='date'/>
                  <Box height={16}/>
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