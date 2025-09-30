import React, { useState } from "react";
import dataPelanggan from "../../utils/Pelanggan";

function ListPelanggan() {
  const [pelanggan, setPelanggan] = useState(dataPelanggan);

  const handleAdd = () => {
    const newData = {
      id: pelanggan.length + 1,
      namaPelanggan: "Maul Sumanto",
      jasa: "Cuci Mobil Reguler",
      harga: 50000,
      catatan: "Yang bersih yaa",
    };
    setPelanggan([...pelanggan, newData]);
  };

  return (
    <>
      <h2 className="fw-bold text-center mt-5">Daftar Pelanggan</h2>
      <button className="btn btn-primary mb-3 float-end" onClick={handleAdd}>
        Tambah Data
      </button>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Nama Pelanggan</th>
            <th>Jasa</th>
            <th>Harga</th>
            <th>Catatan</th>
          </tr>
        </thead>
        <tbody>
          {pelanggan.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.namaPelanggan}</td>
              <td>{item.jasa}</td>
              <td>Rp {item.harga.toLocaleString()}</td>
              <td>{item.catatan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListPelanggan;