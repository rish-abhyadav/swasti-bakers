function Gallery() {
  const images = [
    "/gallery/rrr.jpg",
    "/gallery/shop1.jpeg",
    "/gallery/shop2.jpeg",
    "/gallery/shop3.jpeg",
    "/gallery/cake1.jpeg",
    "/gallery/shop1.jpeg",
    "/gallery/shop3.jpeg",
    "/gallery/shop2.jpeg"
  ];

  return (
    <div id="gallery" style={{ padding: "60px 20px", textAlign: "center", overflow: "hidden" }}>
      <h2 style={{ marginBottom: "30px" }}>Our Shop</h2>

      <div className="scroll-container">
        {images.map((img, i) => (
          <div className="image-card" key={i}>
            <img src={img} alt="shop" className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;