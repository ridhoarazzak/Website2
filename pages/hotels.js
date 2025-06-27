import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Hotels() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Daftar Hotel</h1>
        <p className="text-[#6F4E37]">Info hotel akan ditampilkan di sini.</p>
      </main>
      <Footer />
    </div>
  );
}
