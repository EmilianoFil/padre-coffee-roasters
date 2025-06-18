// Import the functions from Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Configuración del proyecto Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyD82F6v4pqs9EoGAdgl2NZ-mjO5PrU6j6A",
  authDomain: "la-filial-cafe.firebaseapp.com",
  projectId: "la-filial-cafe",
  storageBucket: "la-filial-cafe.firebasestorage.app",
  messagingSenderId: "83503296572",
  appId: "1:83503296572:web:540e0c166960ddbda49339",
  measurementId: "G-YWFNNTXB8F"
};

// Si querés seguir usando app y db desde este archivo, podés exportarlos también:
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
