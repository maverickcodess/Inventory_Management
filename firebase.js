// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBsM9LH_gcTJpNY9Elu8j3j2mdG5zpkNFk",
  authDomain: "inventory-management-3e401.firebaseapp.com",
  projectId: "inventory-management-3e401",
  storageBucket: "inventory-management-3e401.appspot.com",
  messagingSenderId: "363793539314",
  appId: "1:363793539314:web:5767dd771fe188c208f06b",
  measurementId: "G-31ZZ4CFFCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore};