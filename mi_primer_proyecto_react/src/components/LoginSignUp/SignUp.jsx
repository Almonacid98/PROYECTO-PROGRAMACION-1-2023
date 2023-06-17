import React from 'react';
import { Formik, Form, Field } from 'formik';
import './SignUp.css';
import axios from 'axios';

export const SignUp = () => {
  const handleSignUp = async (values) => {
    try {
      const baseURL = 'http://127.0.0.1:5000'; ///ip default en flask
      const response = await axios.post(`${baseURL}/example/ola`, values);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };

  return (
    <div className="register-section">
      <div className="register-form">
        <h2>Registrarse</h2>
        <Formik initialValues={initialValues} onSubmit={handleSignUp}>
          <Form>
            <Field
              type="text"
              placeholder="Nombre"
              name="name"
              className="input-field"
            />
            <Field
              type="email"
              placeholder="Correo electrónico"
              name="email"
              className="input-field"
            />
            <Field
              type="number"
              placeholder="Teléfono"
              name="phone"
              className="input-field"
            />
            <Field
              type="password"
              placeholder="Contraseña"
              name="password"
              className="input-field"
            />
            <button type="submit" className="submit-button">
              Registrarse
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
