import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDh0kvcC-CNFcLXsNJvTBnQ5kiNHBm1QVE",
    authDomain: "messenger-56dbc.firebaseapp.com",
    databaseURL: "https://messenger-56dbc.firebaseio.com",
    projectId: "messenger-56dbc",
    storageBucket: "messenger-56dbc.appspot.com",
    messagingSenderId: "707278756817",
    appId: "1:707278756817:web:30478a69b35921b8515ef0",
    measurementId: "G-GKS905ZB8B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth= firebase.auth();
const db= firebase.firestore();
export{auth,db};