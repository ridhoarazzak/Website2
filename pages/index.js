import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold text-[#3B7A57] mb-4">Selamat Datang</h1>
        <p className="text-[#6F4E37]">Website resmi Motel & Tourism Solok Selatan.</p>
      </main>
      <Footer />
    </div>
  );
}
