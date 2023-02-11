import React ,{  useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';




const Article = (props) => {
    const [showitem , setShowitem] = useState(false);


  return (
    <div className='w-full h-auto border py-4 px-2 md:px-8  mx-auto my-4 rounded  '  key={props.id}>
    <div className='w-full h-auto flex justify-between '>
    <h3 className='w-full p-2 text-start font-semibold bg-sky-500 text-white text-lg capitalize
    '
    
    
    >{props.title}</h3>
    <button className=' p-2' onClick={()=> setShowitem(!showitem)}>
    
      {
        !showitem ?  <FaPlus className='text-xl text-gray-500 '/>:
        <FaMinus className='text-xl text-gray-500 '/>
      
      
      }
      </button> 
    </div>
     <p className ={ ` mt-4  p-2 md:p-4  font-mono indent-2 text-justify 
     text-md traking-widest
      text-gray-800 
      ${showitem?"visible":"hidden"}`}  >{props.body} </p>
    </div>
  )
}

export default Article
