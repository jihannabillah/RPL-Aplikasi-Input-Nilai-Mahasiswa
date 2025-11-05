export function validasiInput(nim, nama, matkul, nilai) {
  if (!nim || !nama || !matkul || !nilai) {
    alert("⚠️ Semua field wajib diisi!");
    return false;
  }
  if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nama)) {
    alert("⚠️ Nama hanya boleh berisi huruf dan spasi!");
    return false;
  }
  if (!/^[0-9]+$/.test(nim)) {
    alert("⚠️ NIM hanya boleh berisi angka!");
    return;
  }
  if (nim.length < 8) {
    alert("⚠️ NIM minimal harus 9 digit!");
    return false;
  }
  if (nama.length < 3) {
    alert("⚠️ Nama terlalu pendek, minimal 3 huruf!");
    return false;
  }
  if (nilai < 0 || nilai > 100) {
    alert("⚠️ Nilai harus antara 0 - 100!");
    return false;
  }
  return true;
}
