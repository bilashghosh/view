// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC11tYK5IcNL2_3sArzxGUJkslJebj815U",
  authDomain: "test-web-app-35335.firebaseapp.com",
  projectId: "test-web-app-35335",
  storageBucket: "test-web-app-35335.appspot.com",
  messagingSenderId: "1098428218234",
  appId: "1:1098428218234:web:41401695f26fa9b978f4c3",
  measurementId: "G-K0DKTCYXMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;