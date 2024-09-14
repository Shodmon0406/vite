import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import {  Link } from 'react-router-dom';

const Registr = () => {
  async function registr(values) {
    try {
      const response = await axios.post("http://135.181.152.249:8072/Account/register", values);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h1>
        <Formik
          initialValues={{
            userName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values) => {
            console.log("Form submitted with values:", values);
            registr(values);
          }}
        >
          <Form className="space-y-4">
            <div>
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
              <Field
                id="userName"
                name="userName"
                placeholder="YourUsername"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <Field
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+992 93-514-24-93"
                type="tel"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="email@example.com"
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="********"
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                placeholder="********"
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </Form>
        </Formik>

        <div className="mt-4 text-center">
          <p className="text-gray-600">Already have an account?</p>
          <Link
            to="/login"
            className="text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registr;
