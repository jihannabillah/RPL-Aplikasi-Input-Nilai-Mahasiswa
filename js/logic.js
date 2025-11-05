import { validasiInput } from "./validation.js";
import { createData, readData } from "./dataService.js";
import { renderTable, resetForm } from "./uiHandler.js";

export async function simpanDataMahasiswa(nim, nama, matkul, nilai) {
  if (validasiInput(nim, nama, matkul, nilai)) {
    await createData(nim, nama, matkul, nilai);
    alert("✅ Data berhasil disimpan!");
    resetForm();
  }
}

export async function tampilkanData() {
  const data = await readData();
  renderTable(data);
}
