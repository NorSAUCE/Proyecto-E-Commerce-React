import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBa80cO0rkiVLmTR9B4OV7AzRbLegrellA",
    authDomain: "proyecto-saucedo.firebaseapp.com",
    projectId: "proyecto-saucedo",
    storageBucket: "proyecto-saucedo.appspot.com",
    messagingSenderId: "682292935015",
    appId: "1:682292935015:web:3f10bc61645cf4ab34d7c2",
    measurementId: "G-LYKF7CLE7K"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.db= firebase.firestore()
  export default firebase;