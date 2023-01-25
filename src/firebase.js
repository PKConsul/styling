// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuAVYA3doFQ3fstNRWBxtczEVYQhVCUtA",
  authDomain: "testing2-56beb.firebaseapp.com",
  projectId: "testing2-56beb",
  storageBucket: "testing2-56beb.appspot.com",
  messagingSenderId: "829864446693",
  appId: "1:829864446693:web:055c03048bce0e02fb620c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db}