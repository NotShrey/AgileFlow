// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskm-99b3f.firebaseapp.com",
  projectId: "taskm-99b3f",
  storageBucket: "taskm-99b3f.appspot.com",
  messagingSenderId: "363642869387",
  appId: "1:363642869387:web:42e8ba9a3ca07dd8c1a68e",
  measurementId: "G-BGQ1M81RX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);