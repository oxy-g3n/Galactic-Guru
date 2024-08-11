// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "your stuff here",
  authDomain: "your stuff here",
  projectId: "your stuff here",
  storageBucket: "your stuff here",
  messagingSenderId: "your stuff here",
  appId: "your stuff here",
  measurementId: "your stuff here"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{app,auth};