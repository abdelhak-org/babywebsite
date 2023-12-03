import React, { useState, useEffect } from 'react';
import { db } from "../firebase.config";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import MyArticle from './MyArticle';

const MyArticles = ({ currentUser }) => {
  const [listPosts, setListPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const userCollection = collection(db, "users");
      const snapshot = await getDocs(userCollection);
      const postsData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setListPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  };

  const deleteArticle = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
    } catch (error) {
      console.error("Error deleting article:", error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className='max-w-[1536px] mx-auto h-auto border border-gray-light rounded-lg  bg-white text-xl my-12'>
      <div className='w-full p-4 mx-auto my-8'>
        <h3 className='text-center text-3xl my-8 underline underline-offset-8   font-bold font-inter '> Loved Articles </h3>
      </div>

      {listPosts.map((article) => (
        <MyArticle
          key={article.id}
          title={article.title}
          body={article.body}
          deleteArticle={() => deleteArticle(article.id)}
          currentUser={currentUser}
          id={article.id}
          author={article.author}
        />
      ))}
    </div>
  );
};

export default MyArticles;

