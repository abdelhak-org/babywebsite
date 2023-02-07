import React , {useState , useEffect } from "react" ;
import './App.css';
import {Navbar ,Header , Contact , About , Footer , Home }  from "./container";
import CreateUser from "./components/CreateUser";
import { Routes , Route} from "react-router-dom";
import Gallery from './container/Gallery';
import Articles from "./container/Articles";
import Shop from "./container/Shop";
import axios from "axios";
import Login from "./components/Login";
import AddPost from "./components/AddPost";


function App() {

   const  [articles , setArticles] = useState([]);
   

  useEffect(()=>{
    
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        setArticles(res.data)
      })
    
    
    
    })

  return (
   <div className='relative'>
   
   <Navbar/>
   <Header setArticles={setArticles } articles={articles}/>
   
   <Routes>
   <Route exact path ="/"    element={<Home/>}      />
   <Route exact path ="/gallery"    element={<Gallery/>}      />
   <Route exact path ="/articles"    element={<Articles articles={articles}/>}      />
   <Route exact path ="/shop"    element={<Shop/>}      />
   <Route exact path ="/about"    element={< About/>}      />

   <Route path='/subscribe'   element ={<CreateUser/>}  />
   <Route path='/login'   element ={<Login/>}  />
   <Route path='/addpost'   element ={<AddPost/>}  />

   </Routes>
   <Contact/>
   <Footer/>
    
   </div>
  );
}

export default App;
