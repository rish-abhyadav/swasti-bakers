const express = require("express");
const cors = require("cors");

const app = express();

/* ================= MIDDLEWARE ================= */

app.use(cors());
app.use(express.json());

/* ================= PRODUCTS ================= */

let products = [
  { id: 1, name: "Black Forest Cake", price: 500, image: "/products/cake1.jpg" },
  { id: 2, name: "Chocolate Truffle Cake", price: 600, image: "/products/cake2.jpg" },
  { id: 3, name: "Red Velvet Cake", price: 650, image: "/products/cake3.jpg" },
  { id: 4, name: "Vanilla Cake", price: 400, image: "/products/cake4.jpg" },

  { id: 5, name: "Strawberry Pastry", price: 120, image: "/products/pastry1.jpg" },
  { id: 6, name: "Chocolate Pastry", price: 130, image: "/products/pastry2.jpg" },
  { id: 7, name: "Pineapple Pastry", price: 110, image: "/products/pastry3.jpg" },

  { id: 8, name: "Cold Coffee", price: 150, image: "/products/coldcoffee.jpg" },
  { id: 9, name: "Cappuccino", price: 180, image: "/products/Cappuccino.jpg" },

  { id: 10, name: "Veg Burger", price: 200, image: "/products/vegburger.jpg" },
  { id: 11, name: "Cheese Burger", price: 250, image: "/products/cheeseburger.jpg" },

  { id: 12, name: "Margherita Pizza", price: 300, image: "/products/mergeritapizza.jpg" },
  { id: 13, name: "Farmhouse Pizza", price: 400, image: "/products/farmhousepizza.jpg" },

  { id: 14, name: "Masala Dosa", price: 180, image: "/products/masaladosa.jpg" },
  { id: 15, name: "Paneer Dosa", price: 220, image: "/products/paneerdosa.jpg" },

  { id: 16, name: "French Fries", price: 120, image: "/products/frenchfries.jpg" },
  { id: 17, name: "Garlic Bread", price: 140, image: "/products/garlicbread.jpg" },

  { id: 18, name: "Ice Cream Sundae", price: 160, image: "/products/icecreamsundei.jpg" },
  { id: 19, name: "Chocolate Brownie", price: 180, image: "/products/chocolatebrownei.jpg" }
];

/* ================= ORDERS ================= */

let orders = [];

/* ================= PRODUCT APIs ================= */

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Add new product
app.post("/products", (req, res) => {
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    price: Number(req.body.price),
    image: req.body.image
  };

  products.push(newProduct);

  res.json({
    message: "Product added",
    product: newProduct
  });
});

// Delete product
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  products = products.filter((p) => p.id !== id);

  res.json({
    message: "Product deleted"
  });
});

/* ================= ORDER APIs ================= */

// Create order
app.post("/orders", (req, res) => {
  const order = {
    id: Date.now(),
    items: req.body.items,
    total: req.body.total,
    createdAt: new Date()
  };

  orders.push(order);

  res.json({
    message: "Order placed successfully",
    order
  });
});

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

/* ================= ROOT API ================= */

app.get("/", (req, res) => {
  res.send("Bakery Backend Running 🚀");
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});