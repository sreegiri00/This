import { Formik, Field, ErrorMessage } from 'formik';
import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import './lo.css'
import { NavLink } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';


// Validation Schema
const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),
  password: Yup.string()
    .required('Password is required')
});
// console.log("ok :",LoginSchema);

function Login() {
  const storedUser = JSON.parse(localStorage.getItem("users"));

  console.log("data :", storedUser);

  const dataVerification = (values, { setSubmitting }) => {
    console.log("data1 :", storedUser);
    const userName = storedUser.map((res) => res.username == values.username && res.password == values.password).filter((res) => res == true).find((res) => res == true);
    console.log("llla" ,userName);
    if (userName == true ) {
      
      console.log("its have ....");
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
      
    }
    else{
      console.log("is not");
      setTimeout(() => {
        alert("Incorrect password or username");
        setSubmitting(false);
      }, 400);
    } 

    console.log("login detalse:", values.username);
   
  }

 


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900">Login</h1>

        <Formik
          initialValues={{ username: 'aaa', password: '123456' }}
          validationSchema={LoginSchema}
          onSubmit={dataVerification}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4 rounded-md shadow-sm">
                <div>
                  <label htmlFor="username" className="sr-only">Username</label>
                  <Field
                    name="username"
                    type="text"
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Username"
                  />
                  <ErrorMessage name="username" component="div" className="mt-1 text-sm text-red-500" />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-500" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-600 border border-transparent rounded-md group hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>

            </form>
          )}
        </Formik>
        <div className='flex justify-center'><NavLink to="/register">Register</NavLink></div>
      </div>
    </div>
  );
}

export default Login;