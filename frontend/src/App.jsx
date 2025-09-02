import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Djs from "./pages/Djs";
import Eventos from "./pages/Eventos";
import Contacto from "./pages/Contacto";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="p-6 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/djs" element={<Djs />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
