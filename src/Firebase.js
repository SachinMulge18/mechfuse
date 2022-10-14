// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6SggnVWErJNBB2gi5vFG596hDCcm7hVc",
  authDomain: "mechfuse-auth.firebaseapp.com",
  projectId: "mechfuse-auth",
  storageBucket: "mechfuse-auth.appspot.com",
  messagingSenderId: "571812772772",
  appId: "1:571812772772:web:e8cf2f0ad873f83f8e5f31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
