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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900">Login</h1>

        <Formik
          initialValues={{ username: 'aaa', password: '123456' }}
          validationSchema={LoginSchema}
          onSubmit={dataVerification}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="username" className="sr-only">Username</label>
                  <Field
                    name="username"
                    type="text"
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Username"
                  />
                  <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
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