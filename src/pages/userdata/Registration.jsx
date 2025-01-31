import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Registration = () => {

  const [strData , setStrData ] =useState()
  const initialValues = {
    id:new Date,
    username: 'aaa',
    contact: '1234567890',
    email: 'sreegiri00@gmail.com',
    password: '123456',
    confirmPassword: '123456'
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    contact: Yup.string()
      .matches(/^[0-9]{10}$/, 'Invalid phone number')
      .required('Contact number is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(true); 
    localStorage.setItem("users", JSON.stringify(values));
    const storedUser = JSON.parse(localStorage.getItem("users"));
    console.log("stored data :",storedUser);
  };
  // const dataStored =()=>{
  //   const user = { name: "Alice", age: 25 };
  //   console.log("saved...", strData);
  // }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create a new account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <div className="mt-1">
                    <Field
                      name="username"
                      type="text"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${errors.username && touched.username ?
                          'border-red-500 focus:ring-red-500' :
                          'border-gray-300 focus:ring-indigo-500'
                        }`}
                    />
                    <ErrorMessage name="username" component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                    Contact Number
                  </label>
                  <div className="mt-1">
                    <Field
                      name="contact"
                      type="text"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${errors.contact && touched.contact ?
                          'border-red-500 focus:ring-red-500' :
                          'border-gray-300 focus:ring-indigo-500'
                        }`}
                    />
                    <ErrorMessage name="contact" component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <Field
                      name="email"
                      type="email"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${errors.email && touched.email ?
                          'border-red-500 focus:ring-red-500' :
                          'border-gray-300 focus:ring-indigo-500'
                        }`}
                    />
                    <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <Field
                      name="password"
                      type="password"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${errors.password && touched.password ?
                          'border-red-500 focus:ring-red-500' :
                          'border-gray-300 focus:ring-indigo-500'
                        }`}
                    />
                    <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <Field
                      name="confirmPassword"
                      type="password"
                      className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ${errors.confirmPassword && touched.confirmPassword ?
                          'border-red-500 focus:ring-red-500' :
                          'border-gray-300 focus:ring-indigo-500'
                        }`}
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="mt-1 text-sm text-red-600" />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Registering...' : 'Register'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <div className='flex justify-center mt-3'><NavLink to="/login">login</NavLink></div>
        </div>
      </div>
    </div>
  );
};

export default Registration;