function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom fw-semibold">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-car fa-2xl" style={{ color: "rgb(44, 163, 255)" }}></i>
              <span className="ms-2 fs-4">Cuci Mobil</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2">Home</a></li>
            <li><a href="#" className="nav-link px-2">Booking</a></li>
            <li><a href="#" className="nav-link px-2">Daftar Harga</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Masuk</button>
            <button type="button" className="btn btn-primary">Daftar</button>
          </div>
        </header>
      </div>
      {/* Home */}
      <div className="container my-">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Harga Bersahabat Hasil Bukan Main-Main</h1> <p className="lead fw-semibold mt-5">Kami Menyediakan Jasa :
              <ul>
                <li>Cuci Mobil Reguler</li>
                <li>Cuci Mobil Premium</li>
                <li>Poles & Detailing</li>
                <li>Anti Jamur</li>
              </ul>
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 mt-5">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Pesan Sekarang</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src="https://images.pexels.com/photos/6872148/pexels-photo-6872148.jpeg" alt="" width="450" />
          </div>
        </div>
      </div>

      {/* Daftar Harga */}

      <div className="row row-cols-1 row-cols-md-2 mb-2 text-center mx-5 mt-5">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Cuci Mobil Reguler</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">Rp 50.000</h1>
              <h4 className="list-unstyled mt-5 mb-5 mx-5 fw-normal">Pencucian standar bagian eksterior dan interior untuk menjaga kebersihan mobil sehari-hari agar membuat kendaraan tetap nyaman dipakai</h4>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Pesan Sekarang</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Cuci Mobil Premium / Salon Mobil</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">Rp 150.000</h1>
              <h4 className="list-unstyled mt-5 mb-5 mx-5 fw-normal">Pencucian lebih detail dengan perlindungan tambahan seperti wax atau coating ringan agar mobil lebih mengkilap dan tahan lama</h4>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Pesan Sekarang</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Poles & Detailing</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">Rp 500.000</h1>
              <h4 className="list-unstyled mt-5 mb-5 mx-5 fw-normal">Perawatan eksterior dan interior secara mendalam, termasuk poles cat, membersihkan baret halus, serta detailing interior hingga celah-celah kecil</h4>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Pesan Sekarang</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Anti Jamur & Proteksi Kaca</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">Rp 200.000</h1>
              <h4 className="list-unstyled mt-5 mb-5 mx-5 fw-normal">Menghilangkan jamur pada kaca/bodi serta memberikan lapisan pelindung agar kaca tetap jernih dan bebas noda air</h4>
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Pesan Sekarang</button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking */}

      <div className="mx-5 mt-5 mb-5">
        <h4 className="text-center fw-bold mb-4">Menu Booking</h4>
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-12">
              <label htmlFor="firstName" className="form-label">Nama Depan</label>
              <input type="text" className="form-control bg-light" id="firstName" required />
              <div className="invalid-feedback">Nama tidak valid</div>
            </div>

            <div className="col-sm-12">
              <label htmlFor="lastName" className="form-label">Nama Belakang</label>
              <input type="text" className="form-control bg-light" id="lastName" required />
              <div className="invalid-feedback">Nama tidak valid</div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">Alamat</label>
              <input type="text" className="form-control bg-light" id="address" required />
              <div className="invalid-feedback">Alamat tidak valid</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="country" className="form-label">Pilihan Jasa :</label>
              <select className="form-select bg-light" id="country" required>
                <option value="">Cuci Mobil Reguler</option>
                <option>Cuci Mobil Premium</option>
                <option>Poles & Detailing</option>
                <option>Anti Jamur</option>
                <div className="invalid-feedback">Pilih salah satu</div>
              </select>
            </div>
          </div>

          <hr className="my-3" />

          <h4 className="">Pembayaran</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input bg-light" defaultChecked required />
              <label className="form-check- bg-light" htmlFor="credit">Cash</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input bg-light" required />
              <label className="form-check-label" htmlFor="debit">Transfer Bank</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input bg-light" required />
              <label className="form-check-label" htmlFor="paypal">E-Wallet</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input bg-light" required />
              <label className="form-check-label" htmlFor="paypal">Kartu Kredit / Debit</label>
            </div>
          </div>

          <div className="row gy-3">

            <div className="col-md-3">
              <label htmlFor="cc-number" className="form-label">Nomor Kartu</label>
              <input type="text" className="form-control bg-light" id="cc-number" required />
              <div className="invalid-feedback">Nomor salah</div>
            </div>
          </div>

          <hr className="my-4" />

          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Pesan Sekarang
          </button>
        </form>
      </div>

      {/* Footer */}

      <div class="container">
        <footer class="">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Booking</a></li>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Daftar Harga</a></li>
          </ul>
          <p class="text-center text-body-secondary">© 2025 Maulana Izuddin</p>
        </footer>
      </div>

    </>
  );
}

export default App;
