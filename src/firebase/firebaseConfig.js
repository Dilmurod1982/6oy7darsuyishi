import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWFe2Aozj5pBElhU4l5LLJNnHfbL0_fcE",
  authDomain: "my-store-9156b.firebaseapp.com",
  projectId: "my-store-9156b",
  storageBucket: "my-store-9156b.appspot.com",
  messagingSenderId: "172500573868",
  appId: "1:172500573868:web:0b18ccf3ca6715e7c40909",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
