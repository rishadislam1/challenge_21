import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCceu7UM-eNvSCN77ZSQvrOWxa6vuFIGkU",
  authDomain: "technet-adec7.firebaseapp.com",
  projectId: "technet-adec7",
  storageBucket: "technet-adec7.appspot.com",
  messagingSenderId: "640038654775",
  appId: "1:640038654775:web:940e52235584645ba880b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
