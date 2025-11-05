import { db } from "./firebaseConfig.js";
import { collection, doc, setDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const colRef = collection(db, "mahasiswa");

// 🔹 CREATE or UPDATE data (ID = NIM)
export async function createData(nim, nama, matkul, nilai) {
  try {
    const docRef = doc(colRef, nim); // gunakan NIM sebagai ID dokumen
    await setDoc(docRef, { nim, nama, matkul, nilai });
    console.log("Data berhasil disimpan untuk NIM:", nim);
  } catch (error) {
    console.error("Gagal menyimpan data:", error);
  }
}

// 🔹 READ all data
export async function readData() {
  const data = [];
  const querySnapshot = await getDocs(colRef);
  querySnapshot.forEach((doc) => data.push(doc.data()));
  return data;
}
