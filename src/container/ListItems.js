import React from 'react'
import NavLink from '../components/NavLink'

const ListItems = ({list}) => {
  return (
    <ul className='  w-fit px-2  
   
     '>
        {
         list.map((item , index) => <NavLink title= {item } key={index}/>)  
        }
    </ul>
  )
}

export default ListItems
