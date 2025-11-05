// Fungsi untuk menampilkan tabel
export function renderTable(data) {
  const tabel = document.getElementById("isiTabel");
  if (!tabel) return;

  tabel.innerHTML = "";

  // Gunakan index dari forEach (parameter kedua)
  data.forEach((item, index) => {
    tabel.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.nama || "-"}</td>
        <td>${item.nim || "-"}</td>
        <td>${item.matkul || "-"}</td>
        <td>${item.nilai || "-"}</td>
      </tr>
    `;
  });
}

// Fungsi untuk mereset form input setelah simpan
export function resetForm() {
  const form = document.getElementById("nilaiForm");
  if (form) form.reset();
}
