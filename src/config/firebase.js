import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';



const firebaseConfig = {
    apiKey: "AIzaSyC8M_GrvfNjok3fa5Xj89G76eQjIo-bgIE",
    authDomain: "file-management-sys.firebaseapp.com",
    projectId: "file-management-sys",
    storageBucket: "file-management-sys.appspot.com",
    messagingSenderId: "483672927867",
    appId: "1:483672927867:web:240b57d684d849374b7cde",
    measurementId: "G-VVXPQ0ZZTV"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  

  export default fire;