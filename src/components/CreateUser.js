import React , {useState} from 'react';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {auth} from "../firebase.config";

const CreateUser = () => {
    const [ userEmail , setUserEmail] = useState("");
    const [ userPassword , setUserPassword] = useState("");
    



  const navigate = useNavigate() ;

  const submitHandler =  (e)=>{
          e.preventDefault();
            createUserWithEmailAndPassword(auth , userEmail ,userPassword)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user is => ",user.email , user.id)
            // ...
          })
          .catch((error) => {
              console.log(error.message)
            // ..
          });
          navigate("/login")

  }

 

  

  return (
      <div className='w-screen h-screen bg-gray-100 pt-8'>
        <h2 className='text-4xl font-semibold w-fit  my-4 mx-auto '>Sign Up <span className='font-normal'> form</span></h2>
        < div className='w-[80%] h-[80%] mx-auto flex
        justify-between items-center border  rounded-xl shadow-lg drop-shadow-2xl     shadow-cyan-500 bg-white-400 overflow-hidden	'>
        <div className='w-[50%]  h-full'>
         <form className='w-full h-full p-4 bg-white'>
         <h4 className=' block w-fit mx-auto mt-8 text-gray-800 font-semibold text-xl tracking-wider'> 
         Hello , friend! </h4>

         <input onChange={e => setUserEmail(e.target.value)}
           placeholder='Email '  className='w-80 px-4 py-2 border rounded-xl text-gray-500
          shadow-md shadow-sky-200 block mx-auto my-4  mb-8  focus:border-blue-300 outline-none' />

          <input  onChange={e => setUserPassword(e.target.value )}
           placeholder=' Password '  className='w-80 px-4 py-2 border rounded-xl focus:border-blue-300 text-gray-500 outline-none 
          shadow-md shadow-sky-200 block mx-auto my-4 mb-8 ' />

          <button onClick={submitHandler }
          
          className='w-80 px-4 py-2 border rounded-xl text-lg
          shadow-md shadow-sky-200 block mx-auto my-4 bg-sky-400 text-teal-100  hover:text-white'>Create Account</button>
          

          <p className='w-fit text-sm text-gray-800 mx-auto mt-8'> Already have an account
          <span className='text-blue-500 ml-2 hover:underline cursor-pointer'>sign in</span> </p>
        </form>
        
        </div>

        <div className='w-[50%] bg-gradient-to-b from-blue-200 to-sky-600  h-full flex justify-center items-center flex-col '>
          <h3 className='w-fit text-2xl font-semibold text-white block mx-auto my-4'> Glad too meet you </h3>
          <p className='block font-normal text-lg text-white my-4'> lorem lorem loem lor ipsu di ! </p>
         
        </div>




        </div>
      </div>
  )
}

export default CreateUser
