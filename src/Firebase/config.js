// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5kEFT8n4bsoDAmKG5yHbQ4pIPVqPO4fs",
  authDomain: "proyecto-reactjs-mercedes.firebaseapp.com",
  projectId: "proyecto-reactjs-mercedes",
  storageBucket: "proyecto-reactjs-mercedes.appspot.com",
  messagingSenderId: "511159698449",
  appId: "1:511159698449:web:61f1fc6374b71946b0ddb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)