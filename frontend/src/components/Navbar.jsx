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
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{
        background: "linear-gradient(to right, #a855f7, #ec4899, #ef4444)",
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand fw-bold">
          🎧 DJ Events
        </Link>

        {/* Botón responsive */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {links.map((link, index) => (
              <li key={link.to} className="nav-item">
                <Link
                  to={link.to}
                  className={`nav-link px-3 ${
                    activeIndex === index ? "active fw-bold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
