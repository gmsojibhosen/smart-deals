// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2aTGrRQ-EJZYucyMdMYB8O37xRQU611Y",
  authDomain: "smart-deals-sojib.firebaseapp.com",
  projectId: "smart-deals-sojib",
  storageBucket: "smart-deals-sojib.firebasestorage.app",
  messagingSenderId: "430282931160",
  appId: "1:430282931160:web:7afb4f461d4fa22cce50ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);