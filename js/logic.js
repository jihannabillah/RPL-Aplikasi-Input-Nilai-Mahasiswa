// Import fungsi validasi untuk memeriksa apakah input dari form sudah benar
import { validasiInput } from "./validation.js";

// Import fungsi untuk menyimpan dan membaca data dari Firebase
import { createData, readData } from "./dataService.js";

// Import fungsi untuk menampilkan data ke tabel dan mengosongkan form setelah disimpan
import { renderTable, resetForm } from "./uiHandler.js";


// ===============================
// 🔹 Fungsi untuk menyimpan data mahasiswa ke Firebase
// ===============================
export async function simpanDataMahasiswa(nim, nama, matkul, nilai) {
  
  // Cek dulu apakah semua input valid (tidak kosong, format benar, dll)
  if (validasiInput(nim, nama, matkul, nilai)) {
    
    // Kalau valid → simpan data ke Firebase
    await createData(nim, nama, matkul, nilai);
    
    // Beri pesan bahwa data berhasil disimpan
    alert("✅ Data berhasil disimpan!");

    // Kosongkan form supaya siap untuk input berikutnya
    resetForm();
  }
}


// ===============================
// 🔹 Fungsi untuk menampilkan semua data mahasiswa dari Firebase
// ===============================
export async function tampilkanData() {
  // Ambil semua data dari database Firebase
  const data = await readData();

  // Tampilkan data yang sudah diambil ke tabel di halaman web
  renderTable(data);
}
