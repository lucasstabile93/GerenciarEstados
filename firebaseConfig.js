// firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "tasklists-a17f4.firebaseapp.com",
  projectId: "tasklists-a17f4",
  storageBucket: "tasklists-a17f4.firebasestorage.app",
  messagingSenderId: "54580780239",
  appId: "1:54580780239:web:6b1779968804894d8eebba"
};

export const app = initializeApp(firebaseConfig);
