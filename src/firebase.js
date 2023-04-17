import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB15xd1ZPUJHIq9uF1XkAIgTXYsRWPTElo",
    authDomain: "zaio--clone-23337.firebaseapp.com",
    projectId: "zaio--clone-23337",
    storageBucket: "zaio--clone-23337.appspot.com",
    messagingSenderId: "194014986557",
    appId: "1:194014986557:web:05f54e45d364a183dd8554",
    measurementId: "G-39CHCKDWVP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};