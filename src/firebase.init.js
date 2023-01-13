// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJKqkctmUcXEMueI-e-0HxUzOEmqFDloc",
  authDomain: "task-management-fe.firebaseapp.com",
  projectId: "task-management-fe",
  storageBucket: "task-management-fe.appspot.com",
  messagingSenderId: "1042700113038",
  appId: "1:1042700113038:web:f5444d97545a2f4f5d25df",
  measurementId: "G-HLVKKF09QB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
