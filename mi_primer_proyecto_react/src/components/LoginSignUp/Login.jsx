import React from 'react';
import {Formik, Form, Field} from 'formik';
import './Login.css';
import { Axios } from 'axios';
export const Login = () => {

  const initialValues = {
    email:'',
    password:''
  }
  const handleLogin = async(values) => { 
    console.log('values:', values) 
    try { 
      const response = await Axios.post('http://localhost:3000/login', values) 
      console.log(response.data) 
    } catch (error) { 
      console.log(error) 
    } 
  }

  return (
    // 
    <Formik className='formik-section'
      initialValues={initialValues}
      onSubmit={handleLogin}>
      <Form className='form-formik'>
        <h2>Iniciar sesión</h2>
          <Field
            type='email'
            placeholder="alguien@example.com"
            name='email' />
          <Field
            type="password"
            placeholder="Contraseña"
            name='password' />
          <button type='submit' onClick={handleLogin}>Iniciar sesión</button>
      </Form>
    </Formik>
  );
}