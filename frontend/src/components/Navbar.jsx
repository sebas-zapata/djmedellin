import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveIndex(0);
        break;
      case "/djs":
        setActiveIndex(1);
        break;
      case "/eventos":
        setActiveIndex(2);
        break;
      case "/contacto":
        setActiveIndex(3);
        break;
      default:
        setActiveIndex(-1);
    }
  }, [location]);

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/djs", label: "DJs" },
    { to: "/eventos", label: "Eventos" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-black text-white p-4 flex gap-6 justify-center">
      {links.map((link, index) => (
        <Link
          key={link.to}
          to={link.to}
          className={`px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-700 hover:scale-110 transform ${
            activeIndex === index ? "bg-gray-900 scale-110" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
