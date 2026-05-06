import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart, setShowCart } = useContext(CartContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔴 OFFER BAR */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "12px",
          padding: "5px",
          background: "#a9802A",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 1001
        }}
      >
        Upto Rs. 200 OFF on the First Order. T&C apply.
      </div>

      {/* 🔽 NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: "30px",
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          padding: scrolled ? "8px 20px" : "15px 30px",

          background: "#FFF5F0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease"
        }}
      >
        <h2
          style={{
            color: "#a9802A",
            fontSize: scrolled ? "20px" : "26px",
            transition: "0.3s"
          }}
        >
          🍰 Swasti Bakers
        </h2>

        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <a href="#menu" style={linkStyle}>Menu</a>
          <a href="#gallery" style={linkStyle}>Gallery</a>
          <a href="#vr" style={linkStyle}>VR Zone 🎮</a>
          <a href="#reviews" style={linkStyle}>Reviews</a>
          <a href="#contact" style={linkStyle}>Contact</a>

          <button
            onClick={() => setShowCart(true)}
            style={{
              padding: scrolled ? "5px 10px" : "8px 14px",
              background: "#a9802A",
              color: "white",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            🛒 {cart.length}
          </button>
        </div>
      </nav>
    </>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#a9802A",
  fontWeight: "500"
};

export default Navbar;