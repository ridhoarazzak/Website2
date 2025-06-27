import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tourism() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Wisata Unggulan</h1>
        <p className="text-[#6F4E37]">Deskripsi wisata unggulan Solok Selatan.</p>
      </main>
      <Footer />
    </div>
  );
}
