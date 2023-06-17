import React from 'react';
import { Formik, Form, Field } from 'formik';
import './Login.css';
import axios from 'axios';

export const Login = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const handleLogin = async (values) => {
    try {
      const baseURL = 'http://127.0.0.1:5000'; //ip default en flask
      const response = await axios.post(`${baseURL}/example/ola`, values);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
    >
      <Form className='form-formik'>
        <h2>Iniciar sesión</h2>
        <Field
          type='email'
          placeholder="alguien@example.com"
          name='email'
        />
        <Field
          type="password"
          placeholder="Contraseña"
          name='password'
        />
        <button type='submit'>Iniciar sesión</button>
      </Form>
    </Formik>
  );
};
