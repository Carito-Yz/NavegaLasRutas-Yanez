import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnYgQvCGvMve4HX2DT02rapUVztjKw2Ko",
  authDomain: "ecommerce-voleyball.firebaseapp.com",
  projectId: "ecommerce-voleyball",
  storageBucket: "ecommerce-voleyball.firebasestorage.app",
  messagingSenderId: "670273989733",
  appId: "1:670273989733:web:16bb367065ac89cb9baa8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;