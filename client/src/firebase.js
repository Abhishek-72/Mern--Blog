// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern--blog-65ec5.firebaseapp.com",
  projectId: "mern--blog-65ec5",
  storageBucket: "mern--blog-65ec5.appspot.com",
  messagingSenderId: "786362594806",
  appId: "1:786362594806:web:5d8f01d6a0846bbb4cc3d7",
  measurementId: "G-0CXZYE8CTC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);