// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyA9gbVZXTPM36COkTA6wf0NY5vTQYVvF70",
  authDomain: "blog-haruchu.firebaseapp.com",
  projectId: "blog-haruchu",
  storageBucket: "blog-haruchu.appspot.com",
  messagingSenderId: "868496842959",
  appId: "1:868496842959:web:710479a2133db37f77d7ba",
  measurementId: "G-2X24ZJL131"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
