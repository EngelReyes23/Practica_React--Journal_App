import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByiaNUpEWjVJyRo1c1mJDBUxepUjuyo-8",
  authDomain: "curso-react--journalapp.firebaseapp.com",
  projectId: "curso-react--journalapp",
  storageBucket: "curso-react--journalapp.appspot.com",
  messagingSenderId: "553951796951",
  appId: "1:553951796951:web:70a413830ea4ef5b395a92",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
