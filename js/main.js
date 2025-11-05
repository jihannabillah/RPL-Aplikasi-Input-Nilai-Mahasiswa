// Import dua fungsi utama dari file logic.js
// - simpanDataMahasiswa → untuk menyimpan data ke Firebase
// - tampilkanData → untuk menampilkan semua data mahasiswa di tabel
import { simpanDataMahasiswa, tampilkanData } from "./logic.js";

// Ambil tombol "Simpan Data" dari halaman HTML (index.html)
const simpanBtn = document.getElementById("btnSimpan");

// Ambil elemen tabel dari halaman lihat-data.html
const tabelContainer = document.getElementById("isiTabel");


// ===============================
// 🔹 Jika tombol "Simpan" ada di halaman
// ===============================
if (simpanBtn) {
  // Tambahkan event listener (aksi) saat tombol diklik
  simpanBtn.addEventListener("click", async () => {

    // Ambil semua nilai dari form input
    const nim = document.getElementById("nim").value.trim();     // ambil isi NIM
    const nama = document.getElementById("nama").value.trim();   // ambil isi Nama
    const matkul = document.getElementById("matkul").value.trim(); // ambil isi Mata Kuliah
    const nilai = document.getElementById("nilai").value.trim();   // ambil isi Nilai

    // Jalankan fungsi simpan data ke Firebase
    await simpanDataMahasiswa(nim, nama, matkul, nilai);
  });
}


// ===============================
// 🔹 Jika halaman berisi tabel (lihat-data.html)
// ===============================
if (tabelContainer) {
  // Tampilkan semua data mahasiswa dari Firebase ke dalam tabel
  tampilkanData();
}
