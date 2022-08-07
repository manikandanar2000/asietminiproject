import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5BUEKEW97UBx-fZHQoO_ikVwnoaaJiZg",
    authDomain: "swiftcart-37bdd.firebaseapp.com",
    projectId: "swiftcart-37bdd",
    storageBucket: "swiftcart-37bdd.appspot.com",
    messagingSenderId: "88719312261",
    appId: "1:88719312261:web:0f27b86fbf3f78d60770ec",
    measurementId: "G-2PT2SMLSZC"
  };
firebase.initializeApp(firebaseConfig);
  
export const firestore = firebase.firestore();

export default firebase