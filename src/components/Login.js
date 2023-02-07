import React, {useState} from 'react'
import {auth} from "../firebase.config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';
const Login = () => {
  const [loginEmail , setLoginEmail] = useState("");
  const [loginPassword , setLoginPassword] = useState("")
  const navigate = useNavigate("")
  
  const login = async(e)=>{
    e.preventDefault() ;
    await  signInWithEmailAndPassword(auth , loginEmail , loginPassword);
    setLoginEmail("");
    setLoginPassword("");
    navigate("/addpost")

  }
  
  
 

 
  return (
    <div className='w-screen min-h-screen bg-gray-100  flex justify-start
      flex-col'>
      <h3 className ='font-semibold  text-2xl text-center p-4 mx-auto mt-8 capitalize 
       text-gray-800 w-96'> Sign in  </h3>

      
<form className='w-full h-full p-4 bg-white'>
         <h4 className=' block w-fit mx-auto mt-8 text-gray-800 font-semibold text-xl tracking-wider'> 
         Hello , friend! </h4>

         <input onChange={e => setLoginEmail(e.target.value)}
         value={loginEmail}
           placeholder='Email '  className='w-80 px-4 py-2 border rounded-xl text-gray-500
          shadow-md shadow-sky-200 block mx-auto my-4  mb-8  focus:border-blue-300 outline-none' />

          <input  onChange={e => setLoginPassword(e.target.value )}
          value ={loginPassword}
           placeholder=' Password '  className='w-80 px-4 py-2 border rounded-xl focus:border-blue-300 text-gray-500 outline-none 
          shadow-md shadow-sky-200 block mx-auto my-4 mb-8 ' />

          <button onClick={login }
          
          className='w-80 px-4 py-2 border rounded-xl text-lg
          shadow-md shadow-sky-200 block mx-auto my-4 bg-sky-400 text-teal-100  hover:text-white'>Create Account</button>
          

          <p className='w-fit text-sm text-gray-800 mx-auto mt-8'> do not  have an Account
          <span className='text-blue-500 ml-2 hover:underline cursor-pointer'>create an Account</span> </p>
        </form>
         
      
      
      
      
     
    </div>
  )
}

export default Login
