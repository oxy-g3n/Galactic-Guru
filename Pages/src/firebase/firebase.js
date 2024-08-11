// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSAKeu4pyHhTmNon2aMhaBeGbxRvkKzcw",
  authDomain: "astrology-de.firebaseapp.com",
  projectId: "astrology-de",
  storageBucket: "astrology-de.appspot.com",
  messagingSenderId: "554952222010",
  appId: "1:554952222010:web:81c8131d77b661733a5c03",
  measurementId: "G-KRBY8E5TPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{app,auth};