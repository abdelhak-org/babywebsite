import React,  {useState ,useEffect} from 'react';
import {db  } from "../firebase.config";
import { getDocs , collection ,doc , deleteDoc} from "firebase/firestore" ;
import { FaMinus, FaPlus } from 'react-icons/fa';


const MyArticles = (props) => {

const [listPosts , setListPostes ] = useState([]);
const [showitem , setShowitem] = useState(false);




const getPosts = async ( )=>{
  
  const collectionsRef = collection(db , "users") ;
  const  data = await getDocs(collectionsRef) ;
  setListPostes(data.docs.map((doc)=>({...doc.data(), id:doc.id})

  ))
}

useEffect(()=>{
getPosts()
}, [])
const deletItem = async(id )=>{
    await deleteDoc( doc(  db , "users" , id))
}

  return (
    <div className='w-screen h-auto border  bg-white text-xl my-12 ' >
    {

        listPosts?.map((item)=>{
        return (
          <div className='w-full h-auto border p-2   md:py-4 md:px-8 mx-auto my-4 rounded relative ' key={item.id}>
          <div className='w-full h-auto flex justify-between '>
          <h3 className='w-full p-2 md:px-4 text-start font-semibold bg-sky-500 text-white
           text-lg capitalize
          '
          
          
          >{item.title}</h3>

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
            ${showitem?"visible":"hidden"}`}  >{item.body} <br/>
           
            </p>

          {
           props.isauth && <div className='w-full h-8 text-blue-400  text-xl font-medium flex justify-between' >
           <p className='w-full text-left px-8 '>
            @{item.author.name}
           </p>
           <span className='p-2 text-red-600 text-2xl '
             onClick={()=> deletItem(item.id)}>x</span>
            </div>
            }
          </div>








        )
        })
    }





    </div>
  )
}

export default MyArticles
