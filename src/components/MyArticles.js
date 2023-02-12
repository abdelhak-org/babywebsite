import React,  {useState ,useEffect} from 'react';
import {db  } from "../firebase.config";
import { getDocs , collection ,doc , deleteDoc} from "firebase/firestore" ;
import MyArticle from './MyArticle';


const MyArticles = ({ currentUser }) => {

const [listPosts , setListPostes ] = useState([]);




const getPosts = async ( )=>{
  
  const collectionsRef = collection(db , "users") ;
  const  data = await getDocs(collectionsRef) ;
  setListPostes(data.docs.map((doc)=>({...doc.data(), id:doc.id})

  ))
}

useEffect(()=>{
getPosts()
}, [ ])
const deletItem = async(id )=>{
    await deleteDoc( doc(  db , "users" , id))
}
  
  return (
    <div className='w-screen h-auto border  bg-white text-xl my-12 ' >
        <div className='w-full p-4 mx-auto my-8 '>
        <h3 className='text-center font-semibold'> My Favourite  MyArticles</h3>
        </div>
    {
        
        listPosts?.map((item)=>{
        return (
        
        <MyArticle  title = {item.title} 
                    body={item.body} deletItem={deletItem} currentUser={currentUser} 
                    id={item.id} author={item.author}
        />
        
        
        )
        })
    
    }
    
    
    
    
    
    </div>
  )
}

export default MyArticles
