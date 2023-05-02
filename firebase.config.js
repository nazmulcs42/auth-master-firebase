// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABMnT4YPRDKt5NNh6rq0VK8dV_SMyblyI",
  authDomain: "auth-master-firebase.firebaseapp.com",
  projectId: "auth-master-firebase",
  storageBucket: "auth-master-firebase.appspot.com",
  messagingSenderId: "121110825206",
  appId: "1:121110825206:web:601f7742cc8b1bdf9e44d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;