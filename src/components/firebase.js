// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBee60ZodXLFXMyA3MsRL0ewOmzmrMZQ8w",
  authDomain: "food-delivery-login-auth.firebaseapp.com",
  projectId: "food-delivery-login-auth",
  storageBucket: "food-delivery-login-auth.appspot.com",
  messagingSenderId: "643796675384",
  appId: "1:643796675384:web:9408dbd7725c44aecdefcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()
export default app;