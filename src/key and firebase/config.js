// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import {getStorage} from "firebase/storage"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMWxx4LMbyh6pG9XPbutrzFVS17MRTaZo",
    authDomain: "netflix-clone-6fc30.firebaseapp.com",
    projectId: "netflix-clone-6fc30",
    storageBucket: "netflix-clone-6fc30.appspot.com",
    messagingSenderId: "359037588127",
    appId: "1:359037588127:web:7dc4eda0723eee597d48aa",
    measurementId: "G-EFMP17J91G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const googleprovider =new GoogleAuthProvider()
// const analytics = getAnalytics(app);