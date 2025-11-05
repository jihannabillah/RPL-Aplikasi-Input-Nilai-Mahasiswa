// Fungsi untuk memeriksa apakah input sudah benar sebelum disimpan ke Firebase
export function validasiInput(nim, nama, matkul, nilai) {
  // 🔹 Cek kalau ada kolom yang kosong
  if (!nim || !nama || !matkul || !nilai) {
    alert("⚠️ Semua field wajib diisi!");
    return false; // hentikan proses
  }

  // 🔹 Cek apakah nama hanya huruf dan spasi (tidak boleh angka/simbol)
  if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nama)) {
    alert("❌ Nama hanya boleh berisi huruf dan spasi!");
    return false;
  }

  // 🔹 Cek apakah NIM hanya berisi angka
  if (!/^[0-9]+$/.test(nim)) {
    alert("🚫 NIM hanya boleh berisi angka, tidak boleh huruf atau simbol!");
    return false;
  }

  // 🔹 Cek apakah panjang NIM minimal 9 digit
  if (nim.length < 9) {
    alert("⚠️ NIM minimal harus 9 digit!");
    return false;
  }

  // 🔹 Cek apakah nama terlalu pendek
  if (nama.length < 3) {
    alert("⚠️ Nama terlalu pendek, minimal 3 huruf!");
    return false;
  }

  // 🔹 Cek apakah nilai berada dalam rentang 0 - 100
  if (nilai < 0 || nilai > 100) {
    alert("🚫 Nilai harus berada di antara 0 dan 100!");
    return false;
  }

  // Jika semua valid, kembalikan true
  return true;
}
