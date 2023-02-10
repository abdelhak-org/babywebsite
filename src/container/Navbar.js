import React from 'react';
import {Link , useNavigate} from "react-router-dom"
import "./navbar.css";


const Navbar = (props) => {



  const navigateTo = useNavigate();
  return (
    <div className='justify-center w-screen  bg-black text-white 
    md:flex md:justify-between align-center py-2 px-4 '>
      <h3 onClick={()=> navigateTo("/")} className='cursor-pointer font-bold py-2 text-2xl uppercase'>baby<span className='text-rose-400'>world</span></h3> 
      <ul className='sm:w-screen md:w-auto sm:text-current'>

        <Link to="/" className='block md:inline text-center text-blue-400'><li>Home</li></Link> 
        <Link to ="about" className='block md:inline text-center'><li>about</li></Link>
        <Link to="articles" className='block md:inline text-center'><li>Articles</li></Link>
        <Link to="gallery" className='block md:inline text-center'><li>gallery</li></Link>
        <Link to ="shop" className='block md:inline text-center hover:text-pink-200'><li>shop</li></Link>
        <Link to="subscribe" className='block md:inline text-center'><li>Subscribe</li></Link> 
        <Link to="login" className='block md:inline text-center'><li>Login </li></Link> 

 
       
       
        
        

      </ul>
    </div>
  )
}
export default Navbar
