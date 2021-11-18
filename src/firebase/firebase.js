// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLBUKdb3klsc8TwM_fX2wEF5C9w9-Y1Rw",
  authDomain: "assignment-5a489.firebaseapp.com",
  projectId: "assignment-5a489",
  storageBucket: "assignment-5a489.appspot.com",
  messagingSenderId: "1041283355686",
  appId: "1:1041283355686:web:9db168a5280e66a33342e7",
  measurementId: "G-DY13W07MTK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
