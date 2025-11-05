import { simpanDataMahasiswa, tampilkanData } from "./logic.js";

const simpanBtn = document.getElementById("btnSimpan");
const tabelContainer = document.getElementById("isiTabel");

if (simpanBtn) {
  simpanBtn.addEventListener("click", async () => {
    const nim = document.getElementById("nim").value.trim();
    const nama = document.getElementById("nama").value.trim();
    const matkul = document.getElementById("matkul").value.trim();
    const nilai = document.getElementById("nilai").value.trim();
    await simpanDataMahasiswa(nim, nama, matkul, nilai);
  });
}

if (tabelContainer) {
  tampilkanData();
}
