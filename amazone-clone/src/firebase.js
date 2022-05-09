//import firebase from 'firebase';
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGW8HZDAHa_Ld801ZJauwLnqrIFy2M86k",
  authDomain: "e-clone-5ee34.firebaseapp.com",
  projectId: "e-clone-5ee34",
  storageBucket: "e-clone-5ee34.appspot.com",
  messagingSenderId: "915815330389",
  appId: "1:915815330389:web:5a21da544682c492a65adc",
  measurementId: "G-Q96HGEJVE8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};

//const analytics = getAnalytics(firebaseApp);