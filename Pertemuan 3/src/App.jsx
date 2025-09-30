import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Page";
import DaftarHarga from "./Page/DaftarHarga";
import Booking from "./Page/Booking";
import Login from "./Page/Login";
import Daftar from "./Page/Daftar";
import Pelanggan from "./Page/Pelanggan/index.jsx";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="daftarHarga" element={<DaftarHarga />}/>
          <Route path="booking" element={<Booking />}/>
          <Route path="login" element={<Login />}/>
          <Route path="daftar" element={<Daftar />}/>
          <Route path="pelanggan" element={<Pelanggan />}/>
        </Routes>
        </BrowserRouter>
      </div>

    </>

  );
}

export default App;
