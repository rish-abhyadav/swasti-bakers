import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Menu() {
  const [items, setItems] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div id="menu" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2>Our Menu</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "1000px",
        margin: "auto"
      }}>
        {items.map((item) => (
          <div key={item.id} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}>
            
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover"
              }}
            />

            {/* DETAILS */}
            <div style={{ padding: "15px" }}>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button
                onClick={() => addToCart(item)}
                style={{
                  width: "100%",
                  padding: "10px",
                  background: "#ff6b6b",
                  color: "white",
                  border: "none",
                  borderRadius: "5px"
                }}
              >
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;