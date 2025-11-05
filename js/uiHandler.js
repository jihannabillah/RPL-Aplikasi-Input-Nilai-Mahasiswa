// Fungsi untuk menampilkan data mahasiswa ke dalam tabel di halaman lihat-data
export function renderTable(data) {
  // Ambil elemen tabel dari halaman (tempat data akan ditampilkan)
  const tabel = document.getElementById("isiTabel");

  // Jika elemen tabel tidak ditemukan (misal bukan di halaman lihat-data), hentikan fungsi
  if (!tabel) return;

  // Kosongkan isi tabel terlebih dahulu sebelum menampilkan data baru
  tabel.innerHTML = "";

  // Ulangi setiap data mahasiswa yang dikirim dari Firebase
  // "index" dipakai untuk menampilkan nomor urut di kolom pertama
  data.forEach((item, index) => {
    tabel.innerHTML += `
      <tr>
        <td>${index + 1}</td>                 <!-- Nomor urut -->
        <td>${item.nama || "-"}</td>          <!-- Nama mahasiswa -->
        <td>${item.nim || "-"}</td>           <!-- NIM mahasiswa -->
        <td>${item.matkul || "-"}</td>        <!-- Mata kuliah -->
        <td>${item.nilai || "-"}</td>         <!-- Nilai -->
      </tr>
    `;
  });
}


// Fungsi untuk mengosongkan (reset) form input setelah data berhasil disimpan
export function resetForm() {
  // Ambil form dari halaman input nilai
  const form = document.getElementById("nilaiForm");

  // Jika form ditemukan, kosongkan semua isinya
  if (form) form.reset();
}
