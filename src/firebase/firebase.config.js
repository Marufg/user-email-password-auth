// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSu40vbwjlmUZ2uedckDxifEE4tp8GNhs",
  authDomain: "user-email-password-auth-f2f5c.firebaseapp.com",
  projectId: "user-email-password-auth-f2f5c",
  storageBucket: "user-email-password-auth-f2f5c.appspot.com",
  messagingSenderId: "620493640968",
  appId: "1:620493640968:web:4c001b52f7b14f6aea48bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;