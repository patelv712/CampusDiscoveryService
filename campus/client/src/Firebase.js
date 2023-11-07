// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMu7Fd3JSKmI0YOPxsYKf3N9_u-zKd7Ek",
  authDomain: "campusdiscoveryservicexraas.firebaseapp.com",
  projectId: "campusdiscoveryservicexraas",
  storageBucket: "campusdiscoveryservicexraas.appspot.com",
  messagingSenderId: "178021783818",
  appId: "1:178021783818:web:6574c9705ed0662f4bc2f3",
  measurementId: "G-JTM7X640Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);