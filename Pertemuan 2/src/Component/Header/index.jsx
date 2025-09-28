import { Link } from "react-router";

export default function Header () {
    return(
        <>
         <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom fw-semibold">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-car fa-2xl" style={{ color: "rgb(44, 163, 255)" }}></i>
              <span className="ms-2 fs-4">Cuci Mobil</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><Link to = "/" className="nav-link px-2">Home</Link></li>
            <li><Link to = "/booking" className="nav-link px-2">Booking</Link></li>
            <li><Link to = "/daftarHarga" className="nav-link px-2">Daftar Harga</Link></li>
          </ul>
          <div className="col-md-3 text-end">
            <Link to = "/login">
            <button type="button" className="btn btn-outline-primary me-2">Masuk</button>
            </Link>
            <Link to = "/daftar">
            <button type="button" className="btn btn-primary">Daftar</button>
            </Link>
          </div>
        </header>
      </div>
        </>
    )
}