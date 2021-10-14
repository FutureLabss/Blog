// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiS8UY_NC6BAibevYlLtqRQufRVImG2Mc",
  authDomain: "react-blog-39b46.firebaseapp.com",
  projectId: "react-blog-39b46",
  storageBucket: "react-blog-39b46.appspot.com",
  messagingSenderId: "105250025004",
  appId: "1:105250025004:web:c3dfb6739fdecd535c2b89",
  measurementId: "G-0GZDP1M5M3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore();
