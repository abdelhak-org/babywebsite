import React,{useState} from 'react';
import {Link , useNavigate} from "react-router-dom"
import "./navbar.css";
import {FaBars} from"react-icons/fa"
import {GoEyeClosed} from "react-icons/go"
const Navbar = ({ currentUser }) => {
  const [showNav , setShowNav] = useState(false)
  const navigateTo = useNavigate();
  
  
  
      return (
      <div className=' relative
        justify-center w-screen  bg-black text-white flex-col md:flex-row
        md:flex md:justify-between align-center py-2 px-4 '>
        <h3 onClick={()=> navigateTo("/")} className='cursor-pointer font-bold py-2 text-2xl uppercase
        text-center
        '
        
        >baby<span className='text-rose-400'>world</span></h3> 
        <ul className= {`w-screen  md:w-auto transition-all ${showNav? "visible" :"hidden"} md:inline-block`}>

          <Link to="/"        className='block md:inline text-center text-blue-400 cursor-pointer'><li>Home</li></Link> 
          <Link to ="about"   className='block md:inline text-center cursor-pointer'><li>about</li></Link>
          <Link to="articles" className='block md:inline text-center cursor-pointer'><li>Articles</li></Link>
          <Link to="gallery"  className='block md:inline text-center cursor-pointer'><li>gallery</li></Link>
          <Link to ="shop"    className='block md:inline text-center hover:text-pink-200 cursor-pointer'><li>shop</li></Link>
          {  !currentUser ?
          <Link to="subscribe" className='block md:inline text-center cursor-pointer'><li>Subscribe</li></Link> :
          <Link to="addpost"   className='block md:inline text-center' cursor-pointer><li>Add Post</li></Link> }
          
          { !currentUser?
          <Link to="login"     className='block md:inline text-center cursor-pointer'><li>Login </li></Link>:
          <Link to="addpost"   className='block md:inline text-center cursor-pointer'><li>LogOut </li></Link>
            }
        
        
        
        
        
        
        
        </ul>  
        
        <div onClick={()=> setShowNav(!showNav)}
        className='w-12 h-12 md:hidden
        absolute top-4 right-4 z-50 cursor-pointer 
        '>
        {!showNav ?<FaBars className='text-xl'/> : <GoEyeClosed className='text-xl'/>}
        </div>
      </div>
  )
}
export default Navbar
