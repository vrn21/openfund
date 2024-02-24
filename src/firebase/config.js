// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import Image from "next/image";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAicsBHvixJnKOgkoFVaAcGW7zusYl9wTk",
  authDomain: "openfund-24f73.firebaseapp.com",
  projectId: "openfund-24f73",
  storageBucket: "openfund-24f73.appspot.com",
  messagingSenderId: "855105297365",
  appId: "1:855105297365:web:3f3eed7b447db188c5fb5c",
  measurementId: "G-4R93MCK8XR"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default firebase_app;
export const auth = getAuth();
