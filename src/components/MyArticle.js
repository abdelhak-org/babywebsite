import React , {useState} from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';


const MyArticle = ({title , body , deletItem , currentUser ,id , author}) => {
    const [showitem , setShowitem] = useState(false);

  
  
    return (
    <div className='w-full h-auto border p-2   md:py-4 md:px-8 mx-auto my-4 rounded relative ' key={id}>
    <div className='w-full h-auto flex justify-between '>
      <h3 className='w-full p-2 md:px-4 text-start font-semibold bg-sky-500 text-white
      text-lg capitalize
      ' >
      {title}
      </h3>

        <button className=' p-2' onClick={()=> setShowitem(!showitem)}>
    
      {
        !showitem ?  <FaPlus className='text-xl text-gray-500 '/>:
        <FaMinus className='text-xl text-gray-500 '/>
      }
        </button> 
    </div>
     <p className ={ `w-full mt-4 p-2 md :p-8 font-mono indent-4 text-justify 
     text-md traking-widest
      text-gray-800 
      ${showitem?"visible":"hidden"}`}  >{body} <br/>
     
      </p>

    {
     currentUser && <div className='w-full h-8 text-blue-400  text-xl font-medium flex justify-between' >
     <p className='w-full text-left px-8 '>
      @ {author.name}
     </p>
     <span className='p-2 text-red-600 text-2xl '
       onClick={()=> deletItem(id)}>x</span>
      </div>
      }
    </div>


  )
}

export default MyArticle
