import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAa0e2auuEprs2QUIXLRLsvJeH57ij3ALE",
    authDomain: "photowall-app-38967.firebaseapp.com",
    databaseURL: "https://photowall-app-38967.firebaseio.com",
    projectId: "photowall-app-38967",
    storageBucket: "photowall-app-38967.appspot.com",
    messagingSenderId: "90019904054",
    appId: "1:90019904054:web:a0e054ec36594a15563697",
    measurementId: "G-J6JL6F1CDR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database=firebase.database();
  export {database};