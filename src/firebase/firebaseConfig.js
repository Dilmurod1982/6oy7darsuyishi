// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWFe2Aozj5pBElhU4l5LLJNnHfbL0_fcE",
  authDomain: "my-store-9156b.firebaseapp.com",
  projectId: "my-store-9156b",
  storageBucket: "my-store-9156b.appspot.com",
  messagingSenderId: "172500573868",
  appId: "1:172500573868:web:0b18ccf3ca6715e7c40909",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
