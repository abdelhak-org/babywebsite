import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase.config";

const CreateUser = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      const user = userCredential.user;
      console.log("User:", user.email, user.id);
      navigate("/login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className='min-h-screen max-w-[1536px] mx-auto bg-gray-light px-8 flex items-center justify-center bg-gray-100'>
      <div className='bg-white w-full md:w-3/4 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-semibold mb-8 text-center'>Sign Up Form</h2>
        <form className='space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-sm font-medium'>Email</label>
            <input
              type='email'
              id='email'
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder='Enter your email'
              className='py-2 px-4 border rounded-lg focus:outline-none focus:border-blue-400'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='text-sm font-medium'>Password</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder='Enter your password'
              className='py-2 px-4 border rounded-lg focus:outline-none focus:border-blue-400'
            />
          </div>
          <button
            onClick={submitHandler}
            className='py-2 px-4 bg-yellow text-white rounded-lg hover:bg-blue-600 focus:outline-none'
          >
            Create Account
          </button>
          <p className='text-sm text-blue'>
            Already have an account? <span className='text-blue-500 cursor-pointer hover:underline'>Sign in</span>
          </p>
        </form>
      </div>
      <div className='hidden md:flex flex-1 justify-center items-center  '>
        <div className='w-4/5'>
          <h3 className='text-4xl font-bold  font-inter  mb-4'>Glad to meet you</h3>
          <p className='text-lg font-light font-roboto  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in vestibulum felis.</p>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
