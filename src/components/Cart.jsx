import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
const { cart, removeFromCart, total, showCart } = useContext(CartContext);

if (!showCart || cart.length === 0) return null;

  const handleCheckout = async () => {
    try {
      await fetch("https://swasti-bakers.onrender.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: cart,
          total
        })
      });

      alert("Order placed successfully!");
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "10px",
        top: "80px",
        width: "300px",
        background: "white",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        zIndex: 1000
      }}
    >
      <h3 style={{ textAlign: "center" }}>🛒 Cart</h3>

      {/* Scrollable Items */}
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>No items</p>
        ) : (
          cart.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #eee",
                padding: "8px 0"
              }}
            >
              <span>{item.name} - ₹{item.price}</span>

              <button
                onClick={() => removeFromCart(i)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 8px",
                  cursor: "pointer"
                }}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>

      {/* Total */}
      <h4 style={{ textAlign: "center", marginTop: "10px" }}>
        Total: ₹{total}
      </h4>

      {/* Checkout Button */}
      {cart.length > 0 && (
        <button
          onClick={handleCheckout}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Cart;
