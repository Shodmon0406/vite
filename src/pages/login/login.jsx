import axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { saveToken } from "../../utils/token";

const Login = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  
  async function login(values) {
    try {
      const { data } = await axios.post(
        "http://135.181.152.249:8072/Account/login",
        values
      );
      saveToken(data?.data);
      
      if (data.statusCode === 200) {
        navigate("/");
      }
    } catch (error) {
      alert("Не правильное имя пользователя или пароль !");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 opacity-50"></div>
          <img
            src="https://source.unsplash.com/1600x900/?technology"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 relative z-10">
          Login
        </h1>
        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          onSubmit={(values) => login(values)}
        >
          <Form className="space-y-4 relative z-10">
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <Field
                id="userName"
                name="userName"
                placeholder="Put Your Username"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                placeholder="Password"
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

        <div className="mt-4 text-center relative z-10">
          <p className="text-gray-600">Don't have an account?</p>
          <Link
            to="/registr"
            className="text-indigo-600 hover:text-indigo-800 font-semibold"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
