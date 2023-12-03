import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigateTo = useNavigate();

  return (
    <h3 onClick={()=> navigateTo("/")} className='cursor-pointer py-2 text-2xl uppercase
    text-center font-script font-bold
    '
    
    >baby<span className='text-pink'>world</span></h3>
  )
}

export default Logo
