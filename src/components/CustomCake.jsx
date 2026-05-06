function CustomCake() {
  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSd4KodoQ3tlf008VrKoabCfYCFcngVMPdXr7NjqTzvyg7pWZw/viewform?usp=dialog"; // 🔴 replace with your actual form link

  return (
    <div
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #fff0f0, #ffe6e6)"
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
        🎂 Customize Your Cake
      </h2>

      <p style={{ maxWidth: "600px", margin: "auto", fontSize: "16px" }}>
        Want a special cake for your occasion? Choose your flavor, design,
        message, and upload your reference image. Make your celebration unique!
      </p>

      {/* IMAGE */}
      <img
        src="/gallery/op.jpg"
        alt="custom cake"
        style={{
          width: "300px",
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      />

      {/* BUTTON */}
      <div>
        <button
          onClick={() => window.open(formLink, "_blank")}
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            background: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "0.3s"
          }}
          onMouseEnter={(e) =>
            (e.target.style.background = "#ff3b3b")
          }
          onMouseLeave={(e) =>
            (e.target.style.background = "#ff6b6b")
          }
        >
          Customize Now 🎂
        </button>
      </div>
    </div>
  );
}

export default CustomCake;