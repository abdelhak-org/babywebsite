import React from 'react'
import { FaBars } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go"
const Menu = ({showNav,setShowNav}) => {
  return (
    <div
    onClick={() => setShowNav(!showNav)}
    className="w-12 h-12 md:hidden
    absolute top-4 right-4 z-50 cursor-pointer 
    "
  >
    {!showNav ? 
      <FaBars className="text-xl" />
    
     : 
     <GoEyeClosed className="text-xl" />
 
    }
  </div>
  )
}

export default Menu
