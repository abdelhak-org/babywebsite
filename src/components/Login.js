import React, { useState } from 'react';
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setLoginEmail("");
      setLoginPassword("");
      navigate("/addpost");
    } catch (error) {
      console.error(error.message);
      // Handle authentication error if needed
    }
  };

  return (
    <div className='max-w-[1536px] mx-auto min-h-screen bg-gray-light flex justify-center items-center'>
      <div className='  p-8 bg-white rounded-lg shadow-md'>
        <h3 className='text-2xl font-semibold text-center font-inter  text-["#333] my-4'>Sign in</h3>
        <form className='space-y-4'>
          <h4 className='text-xl font-semibold text-gray-800 text-center my-4'>
            Hello, friend!
          </h4>
          <input
            type='email'
            onChange={(e) => setLoginEmail(e.target.value)}
            value={loginEmail}
            placeholder='Email'
            className='w-full px-4 py-2 my-8 border border-none rounded-lg text-gray-light  focus:border-gray-light outline-none'
          />
          <input
            type='password'
            onChange={(e) => setLoginPassword(e.target.value)}
            value={loginPassword}
            placeholder='Password'
            className='w-full px-4 py-2 my-8 border border-none rounded-lg focus:border-gray-light text-gray-500 outline-none'
          />
          <button
            onClick={login}
            className='w-full px-4 py-2 my-8 border rounded-lg text-lg bg-blue text-white hover:text-yellow focus:outline-none'
          >
            Sign in
          </button>
          <p className='text-sm text-gray-800 my-8 text-center mt-4'>
            Don't have an account?{' '}
            <span className='text-blue hover:underline cursor-pointer'>
              Create an Account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
