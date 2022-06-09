// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm9IMrP2Bwix5VWDY2Sv3C28bW97KRvv8",
  authDomain: "project-tinder-ec975.firebaseapp.com",
  projectId: "project-tinder-ec975",
  storageBucket: "project-tinder-ec975.appspot.com",
  messagingSenderId: "274970778919",
  appId: "1:274970778919:web:d9eceaba2266e0e0a1dd02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);