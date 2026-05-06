import { useEffect, useState } from "react";

function Admin() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: ""
  });

  // Load products
  const fetchProducts = () => {
    fetch("https://swasti-bakers.onrender.com")
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product
  const handleAdd = async () => {
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    setForm({ name: "", price: "", image: "" });
    fetchProducts();
  };

  // Delete product
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE"
    });

    fetchProducts();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard 🔧</h1>

      {/* ADD PRODUCT */}
      <div style={{ marginBottom: "30px" }}>
        <h3>Add Product</h3>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        /><br /><br />

        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        /><br /><br />

        <input
          placeholder="Image URL (/products/...)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        /><br /><br />

        <button onClick={handleAdd}>Add Product</button>
      </div>

      {/* PRODUCT LIST */}
      <h3>All Products</h3>

      {products.map(p => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          {p.name} - ₹{p.price}

          <button
            onClick={() => handleDelete(p.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;