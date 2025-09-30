import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Hero from "../Component/Hero";
import ListPelanggan from "../Component/ListPelanggan";

export default function Home() {
    return (
        <>
            {/* Header */}

            <Header />

            {/* Home */}

            <Hero />

            {/* List Pelanggan */}

            <ListPelanggan />

            {/* Footer */}

            <Footer />
        </>
    )
}