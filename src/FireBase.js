import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCYFiO_ARoK3zB95LWpDX3YY1XOgpnrD4I",
    authDomain: "crudafcuauchi.firebaseapp.com",
    projectId: "crudafcuauchi",
    storageBucket: "crudafcuauchi.appspot.com",
    messagingSenderId: "600658302909",
    appId: "1:600658302909:web:7634e0f73985449b76e4d4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}