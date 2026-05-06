function Reviews() {
  const reviews = [
    {
      name: "Rohit Sharma",
      text: "Amazing food and cozy atmosphere. Loved the cakes!"
    },
    {
      name: "Priya Singh",
      text: "Best coffee in town. Highly recommended!"
    },
    {
      name: "Aman Verma",
      text: "VR gaming + food = perfect combo!"
    }
  ];

  return (
    <div id="reviews" style={{
      padding: "60px 20px",
      textAlign: "center",
      background: "#fff5f0"
    }}>
      <h2 style={{ marginBottom: "30px" }}>Customer Reviews</h2>

      <div style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        {reviews.map((r, i) => (
          <div key={i} style={{
            width: "250px",
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-8px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          >
            <h4>{r.name}</h4>
            <p style={{ fontStyle: "italic" }}>"{r.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;