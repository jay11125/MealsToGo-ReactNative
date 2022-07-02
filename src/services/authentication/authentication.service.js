import * as firebase from "firebase";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

//   import { initializeApp } from "firebase/app";

//   const firebaseConfig = {
//     apiKey: "AIzaSyBixofaQ7Yu4wrgIIic7EbtPGcMOXc5md0",
//     authDomain: "meals-to-go-37aeb.firebaseapp.com",
//     projectId: "meals-to-go-37aeb",
//     storageBucket: "meals-to-go-37aeb.appspot.com",
//     messagingSenderId: "866145313454",
//     appId: "1:866145313454:web:007f68fa032f0518f4033f",
//   };

//   initializeApp(firebaseConfig);
