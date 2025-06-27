import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Galeri() {
  const gallery = [
    {
      id: 1,
      title: "Air Terjun Tangsi",
      location: "Sungai Lambai",
      description: "Air terjun jernih di hutan tropis, cocok untuk hiking.",
      image: "/foto1.jpg",
    },
    {
      id: 2,
      title: "Gunung Kerinci",
      location: "Padang Aro",
      description: "Spot sunrise & sunset dengan pemandangan sawah.",
      image: "/foto2.jpg",
    },
    {
      id: 3,
      title: "Tangsi 4",
      location: "Sungai Lambai",
      description: "Air terjun alami dengan panorama hijau.",
      image: "/foto3.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Galeri Wisata Solok Selatan</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {gallery.map(item => (
            <div key={item.id} className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-[#6F4E37] text-sm mb-1">{item.location}</p>
                <p className="text-[#6F4E37]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
  }
