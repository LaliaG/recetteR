// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRqRNZRHbGIZu6lMVCxp2GvV6BMBE7hQg",
  authDomain: "m2i-cda-c2ec0.firebaseapp.com",
  projectId: "m2i-cda-c2ec0",
  storageBucket: "m2i-cda-c2ec0.appspot.com",
  messagingSenderId: "192508534018",
  appId: "1:192508534018:web:a024e8c433bd16bb27b61b",
  databaseUrl:
  "https://m2i-cda-c2ec0-default-rtdb.europe-west1.firebasedatabase.app/",
};

export const BASE_DB_URL = firebaseConfig.databaseUrl;
export const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`
export const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`

// Initialize Firebase
const app = initializeApp(firebaseConfig);





