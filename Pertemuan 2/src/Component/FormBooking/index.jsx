export default function FormBooking () {
    return (
        <>
        <div className="mt-5 mb-5">
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
        </>
    )
}