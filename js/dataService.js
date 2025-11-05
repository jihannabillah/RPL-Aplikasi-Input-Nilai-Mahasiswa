// Import koneksi database dari file firebaseConfig.js
import { db } from "./firebaseConfig.js";

// Import fungsi-fungsi yang dibutuhkan dari Firebase Firestore
import { collection, doc, setDoc, getDocs } 
  from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Buat referensi ke koleksi "mahasiswa" di database Firebase
// Koleksi ini seperti "folder" tempat semua data mahasiswa disimpan
const colRef = collection(db, "mahasiswa");

// ====================
// 🔹 Fungsi untuk MENYIMPAN atau MEMPERBARUI data ke Firebase
// ====================
export async function createData(nim, nama, matkul, nilai) {
  try {
    // Gunakan NIM sebagai ID dokumen, supaya data mahasiswa tidak ganda
    const docRef = doc(colRef, nim);

    // Simpan data ke Firebase (jika NIM sudah ada, datanya diperbarui)
    await setDoc(docRef, { nim, nama, matkul, nilai });

    // Tampilkan pesan di console kalau berhasil
    console.log("Data berhasil disimpan untuk NIM:", nim);
  } catch (error) {
    // Kalau ada kesalahan saat menyimpan, tampilkan di console
    console.error("Gagal menyimpan data:", error);
  }
}

// ====================
// 🔹 Fungsi untuk MEMBACA SEMUA data mahasiswa dari Firebase
// ====================
export async function readData() {
  const data = []; // Buat array kosong untuk menampung hasil data

  // Ambil semua data dari koleksi "mahasiswa"
  const querySnapshot = await getDocs(colRef);

  // Ulangi setiap dokumen yang diambil dan masukkan ke array "data"
  querySnapshot.forEach((doc) => data.push(doc.data()));

  // Kembalikan hasil data agar bisa ditampilkan di halaman web
  return data;
}
