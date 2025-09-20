// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJOmQTM-j7wkUkIVrwwtdBQFvZ9MQRTas",
  authDomain: "edumanage-115dc.firebaseapp.com",
  projectId: "edumanage-115dc",
  storageBucket: "edumanage-115dc.firebasestorage.app",
  messagingSenderId: "282571145928",
  appId: "1:282571145928:web:a718dde62b49edb4409bfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
