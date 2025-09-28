import { Link } from "react-router";

export default function ListHarga () {
    return (
        <>
        <div className="row row-cols-1 row-cols-md-2 mb-2 text-center mt-5">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-bg-primary border-primary">
              <h4 className="my-0 fw-normal">Cuci Mobil Reguler</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">Rp 50.000</h1>
              <h4 className="list-unstyled mt-5 mb-5 mx-5 fw-normal">Pencucian standar bagian eksterior dan interior untuk menjaga kebersihan mobil sehari-hari agar membuat kendaraan tetap nyaman dipakai</h4>
              <Link to = "/booking">
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Pesan Sekarang</button>
              </Link>
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
              <h4 className="list-unstyled mt-5 mb-5 mx-5 fw-normal">Pencucian lebih detail dengan perlindungan tambahan seperti wax atau coating ringan agar mobil lebih mengkilap saat digunakan dan tahan lama </h4>
              <Link to = "/booking">
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Pesan Sekarang</button>
              </Link>
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
              <Link to = "/booking">
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Pesan Sekarang</button>
              </Link>
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
              <h4 className="list-unstyled mt-5 mb-5 mx-5 fw-normal">Menghilangkan jamur pada kaca / bodi mobil serta memberikan lapisan efek daun talas pelindung agar kaca tetap jernih dan bebas noda air</h4>
              <Link to = "/booking">
              <button type="button" className="w-100 btn btn-lg btn-outline-primary">Pesan Sekarang</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}