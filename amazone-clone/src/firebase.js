// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);