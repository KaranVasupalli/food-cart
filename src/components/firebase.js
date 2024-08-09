// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB7RXEYkXZbRZ1YLfX1YVmv5RDNP76Vgf8",
  authDomain: "food-cart-ed745.firebaseapp.com",
  projectId: "food-cart-ed745",
  storageBucket: "food-cart-ed745.appspot.com",
  messagingSenderId: "489356379620",
  appId: "1:489356379620:web:0f36806917b6494cd2f3f1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()
export default app;