// Import fungsi utama dari Firebase untuk menghubungkan aplikasi web kita
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

// Import fungsi untuk menggunakan layanan Firestore (database dari Firebase)
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// ===============================
// 🔹 Data konfigurasi Firebase
// ===============================
// Bagian ini berisi "kunci penghubung" antara project web kita dan project Firebase di akun Google.
// Semua informasi di bawah otomatis dibuat saat kita buat project di Firebase Console.
const firebaseConfig = {
  apiKey: "AIzaSyBy_iuzlILiHDpVCyLzLjS_osum6O3xYfU",              // kunci API untuk izin akses project
  authDomain: "input-nilai-mahasiswa-83912.firebaseapp.com",      // alamat autentikasi project
  projectId: "input-nilai-mahasiswa-83912",                       // ID unik project Firebase
  storageBucket: "input-nilai-mahasiswa-83912.firebasestorage.app", // tempat menyimpan file (jika ada)
  messagingSenderId: "648628080019",                              // ID untuk fitur pesan (jarang dipakai di web sederhana)
  appId: "1:648628080019:web:dcd17feb74667af1f8ac66",             // ID unik aplikasi web
  measurementId: "G-8MJV6W6D4Z"                                   // ID untuk pelacakan analitik
};

// ===============================
// 🔹 Mengaktifkan koneksi aplikasi ke Firebase
// ===============================
// Perintah ini untuk menghubungkan website kita ke project Firebase menggunakan konfigurasi di atas.
const app = initializeApp(firebaseConfig);

// ===============================
// 🔹 Mengaktifkan akses ke database Firestore
// ===============================
// "db" ini ibarat pintu utama untuk berkomunikasi dengan database di Firebase.
const db = getFirestore(app);

// Ekspor "db" supaya bisa dipakai di file lain (misalnya dataService.js)
export { db };
