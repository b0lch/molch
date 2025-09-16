// src/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// --- setze hier deine Config (oder importiere / ersetze mit deiner vorhandenen) ---
const firebaseConfig = {
  apiKey: "AIzaSyAJn62nD-a9f9ryy_8Xi0OJhojZ7_6RyOc",
  authDomain: "molchos-8432f.firebaseapp.com",
  projectId: "molchos-8432f",
  storageBucket: "molchos-8432f.appspot.com",
  messagingSenderId: "863467159822",
  appId: "1:863467159822:web:f352836ffa1289f03f575f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
