// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries\
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKhJa30jp3HzY7obeATWgzm_uf1AjJxdo",
  authDomain: "login-app-f8ccf.firebaseapp.com",
  projectId: "login-app-f8ccf",
  storageBucket: "login-app-f8ccf.appspot.com",
  messagingSenderId: "470788435044",
  appId: "1:470788435044:web:ce42f523af282bad130371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()