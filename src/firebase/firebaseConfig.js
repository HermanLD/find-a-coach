import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/auth";

//? Your web app's Firebase configuration
//? Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCJ9iTU1BXGtbJYOqkX_Plx3CYdrDhZwjc",
  authDomain: "vuejs-http-6cd1d.firebaseapp.com",
  databaseURL: "https://vuejs-http-6cd1d.firebaseio.com",
  projectId: "vuejs-http-6cd1d",
  storageBucket: "vuejs-http-6cd1d.appspot.com",
  messagingSenderId: "882865582626",
  appId: "1:882865582626:web:28bfd9bfe50effe393507b",
});

export default firebaseApp;
