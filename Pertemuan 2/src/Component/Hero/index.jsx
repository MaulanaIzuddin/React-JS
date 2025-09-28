import { Link } from "react-router";

export default function Hero () {
    return(
        <>
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
              <Link to = "/booking">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Pesan Sekarang</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src="https://images.pexels.com/photos/6872148/pexels-photo-6872148.jpeg" alt="" width="450" />
          </div>
        </div>
      </div>
        </>
    )
}