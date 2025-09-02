import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Djs from "./pages/Djs";
import DJDetail from "./pages/DJDetail";
import Eventos from "./pages/Eventos";
import EventoDetail from "./pages/EventoDetail";
import Contacto from "./pages/Contacto";
import Revista from "./pages/Revista";

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, backgroundColor: '#f3f4f6', padding: '1.5rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/djs" element={<Djs />} />
          <Route path="/djs/:id" element={<DJDetail />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/:id" element={<EventoDetail />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/revista" element={<Revista />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
