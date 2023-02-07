// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByepi8NseY9vNHpxtUz5CdFLtGliyJohw",
  authDomain: "babyblog-bf54f.firebaseapp.com",
  projectId: "babyblog-bf54f",
  storageBucket: "babyblog-bf54f.appspot.com",
  messagingSenderId: "282484304434",
  appId: "1:282484304434:web:b2bd8840a56e78fe0d2a2b"
};

// Initialize Firebase
 const  app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 const db = getFirestore(app);
 export {app ,auth ,db } 