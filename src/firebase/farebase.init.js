// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtgnogK_5VauyIkmt354EiAtyMkfONNMQ",
  authDomain: "book-vibe-ba1c6.firebaseapp.com",
  projectId: "book-vibe-ba1c6",
  storageBucket: "book-vibe-ba1c6.appspot.com",
  messagingSenderId: "79993185265",
  appId: "1:79993185265:web:f6eda297c8fee3b2425a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;