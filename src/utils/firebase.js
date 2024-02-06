// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSO_6a8CKrqaefp_nL0nz4_qfwF6A_IZU",
  authDomain: "netflixgpt-a089f.firebaseapp.com",
  projectId: "netflixgpt-a089f",
  storageBucket: "netflixgpt-a089f.appspot.com",
  messagingSenderId: "594530476447",
  appId: "1:594530476447:web:b845157d4a29d86d369daa",
  measurementId: "G-V2H6TLHVBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
