import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBy_iuzlILiHDpVCyLzLjS_osum6O3xYfU",
  authDomain: "input-nilai-mahasiswa-83912.firebaseapp.com",
  projectId: "input-nilai-mahasiswa-83912",
  storageBucket: "input-nilai-mahasiswa-83912.firebasestorage.app",
  messagingSenderId: "648628080019",
  appId: "1:648628080019:web:dcd17feb74667af1f8ac66",
  measurementId: "G-8MJV6W6D4Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
