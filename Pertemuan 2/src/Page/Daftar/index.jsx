import { Link } from "react-router";

export default function Daftar () {
    return (
        <>
        <div className="modal modal-sheet position-static d-block p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
  <div className="modal-dialog">
    <div className="modal-content rounded-4 shadow">
      <div className="modal-header p-5 pb-4 border-bottom-0 ">
        <h1 className="fw-bold mb-0 fs-2 w-100 text-center">Daftar</h1>
        <Link to="/" className="btn-close" aria-label="Close"></Link>
      </div>
      <div className="modal-body p-5 pt-0">
        <form>
          <div className="form-floating mb-3">
            <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Alamat Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Daftar</button>
          <hr className="my-4"/>
          <h2 className="fs-5 fw-bold mb-3 align text-center">Atau Masuk dengan</h2>
          <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg className="bi me-1" width="16" height="16" aria-hidden="true">
              <use xlink:href="#google"></use>
            </svg>
            Masuk dengan Google
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg className="bi me-1" width="16" height="16" aria-hidden="true">
              <use xlink:href="#facebook"></use>
            </svg>
            Masuk dengan Facebook
          </button>
          <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg className="bi me-1" width="16" height="16" aria-hidden="true">
              <use xlink:href="#apple"></use>
            </svg>
            Masuk dengan Apple
          </button>
        </form>
        <p className="fw-semibold text-center mt-3">Sudah punya akun? <Link to="/login">Masuk</Link></p>
      </div>
    </div>
  </div>
</div>

        </>
    )
}