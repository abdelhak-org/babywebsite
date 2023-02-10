import React , { useEffect, useState} from 'react'
import {db ,auth} from "../firebase.config";
import { addDoc , collection } from "firebase/firestore";
import { signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const AddPost = (props) => {

    const [PostTitle   , setPostTitle]  = useState("");
    const [PostAuthour , setPostAuthour]  = useState("");
    const [post        , setPost]  = useState("") ;

    const navigate = useNavigate("");
    
    const pushPost = async(e )=>{
        e.preventDefault();
        const collectionRef= collection(db ,"users")
         await  addDoc(collectionRef , {
            title:PostTitle ,
            author:{name :PostAuthour , id: props.currentUser.uid  },
            body:post
        });
        setPostTitle("");
        setPostAuthour("")
        setPost("")
    };



   const getAuth = ()=>{  
    console.log( props.currentUser)
   }
   const logOut= async()=>{
     await signOut(auth);
     navigate("/login")
    
   }
    useEffect(()=>{
      getAuth();
    })
    return (
      
    <div className=' min-h-screen bg-blue-200 flex flex-col text-center border  w-[60vw] mx-auto shadow-md '>
    
    <label className='my-2 py-4 px-8 bg-white border outline-none text-normal font-bold text-red-600
    rounded-xl  w-fit mx-auto'>
          Wellcome {props.currentUser.email}
    <span 
    onClick={logOut}className="p-2 mx-4  rounded border border-blue-200 "  >logout</span>
    </label>
    <label className='my-2 py-4 px-8 bg-white border outline-none text-normal font-bold
    rounded-xl  w-fit mx-auto'> Title</label>
    <input value ={PostTitle}  onChange={e=> setPostTitle(e.target.value)}
    className='w-96 py-2 px-8 bg-white border outline-none text-xl tracking-wide
    text-gray-600 block  
    rounded-xl mx-auto ' />
    
    <label className='py-2 px-8 my-4 bg-white border outline-none text-normal font-bold
    rounded-xl mx-auto w-fit' >Authour</label>
    <input  value= {PostAuthour} onChange={e=> setPostAuthour(e.target.value)}
    className='w-96 block py-2 px-8 bg-white border outline-none text-xl tracking-wide
    text-gray-600  mx-auto
    rounded-xl '/>
    
    <label  className='py-2 px-4 my-2 bg-white border outline-none text-normal font-bold
    rounded-xl mx-auto w-fit'>post </label>
    <textarea value ={post} onChange ={e=> setPost(e.target.value)}
    className='w-[50%] h-60 py-4 px-8 bg-white border outline-none text-xl tracking-wide
    text-gray-600  mx-auto
    rounded-xl '/>
    <button onClick={pushPost}
     className='py-2 px-4 bg-blue-600 text-white font-bold block mx-auto my-2 '> add Post </button>

    </div>
      
  )
}

export default AddPost
