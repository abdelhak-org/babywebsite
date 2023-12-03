import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Header, Contact, About, Home } from './container';
import CreateUser from './components/CreateUser';
import { Routes, Route } from 'react-router-dom';
import Gallery from './container/Gallery';
import Shop from './container/Shop';
import axios from 'axios';
import Login from './components/Login';
import AddPost from './components/AddPost';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';
import useFetchData from './hooks/useFetchData';
import Posts from './container/Posts';

function App() {
  const [articles, setArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const { isPending, data } = useFetchData('users');
  console.log(data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const authStateChangedHandler = async (user) => {
      setCurrentUser(user);
    };

    const unsubscribe = onAuthStateChanged(auth, authStateChangedHandler);

    return () => {
      unsubscribe(); 
    };
  }, []);

  return (
    <div className="relative">
      <Navbar currentUser={currentUser} />
      <Header setArticles={setArticles} articles={articles} />

      <Routes>
      <Route exact path="home" element={<Home currentUser={currentUser} />} />
       <Route exact path="/gallery" element={<Gallery />} />
       <Route exact path="/shop" element={<Shop />} />
       <Route exact path="/about" element={<About />} />
       <Route path="/subscribe" element={<CreateUser />} />
       <Route path="/login" element={<Login />} />
       <Route path="/posts" element={<Posts />} />

       <Route path="/*" element={<Home />} />
       <Route
         path="/addpost"
         element={<AddPost currentUser={currentUser} />}
       />
      </Routes>
    </div>
  );
}

export default App;
