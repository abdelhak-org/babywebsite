import React,  {useState ,useEffect} from 'react';
import {db  } from "../firebase.config";
import { getDocs , collection} from "firebase/firestore" ;
import Article from './Article';
const MyArticles = () => {

const [listPosts , setListPostes ] = useState([]);



const getPosts = async ( )=>{
  
  const collectionsRef = collection(db , "users") ;
  const  data = await getDocs(collectionsRef) ;
  setListPostes(data.docs.map((doc)=>({...doc.data(), id:doc.id})

  ))
}

useEffect(()=>{
getPosts()

}, [])


  return (
    <div className='w-screen h-auto border  bg-white text-xl my-12 ' >
    {

        listPosts?.map((item)=>{
        return (
          <Article title ={item.title} id={item.id } body = {item.body}     />
        )
        })
    }





    </div>
  )
}

export default MyArticles
