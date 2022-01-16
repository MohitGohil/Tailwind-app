// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCIK3mpayWS3sq-aaA2-zDaUQNbmyZIMk",
  authDomain: "e-clone-47f72.firebaseapp.com",
  projectId: "e-clone-47f72",
  storageBucket: "e-clone-47f72.appspot.com",
  messagingSenderId: "75444144009",
  appId: "1:75444144009:web:14aab1be8c030131374358",
  measurementId: "G-4CXX2YXR57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
