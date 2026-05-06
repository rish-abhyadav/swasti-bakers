function VR() {
  return (
    <div
      id="vr"
      style={{
        height: "80vh",

        /* 🔥 BACKGROUND IMAGE + DARK OVERLAY */
        background:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/1.jpg')",

        backgroundSize: "cover",
        backgroundPosition: "center",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        color: "white",
        textAlign: "center"
      }}
    >
      {/* 🔥 TEXT OVERLAY */}
      <div
        style={{
          maxWidth: "600px",
          padding: "20px"
        }}
      >
        <h2 style={{ fontSize: "40px", marginBottom: "10px" }}>
          🎮 VR Gaming Zone
        </h2>

        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Experience immersive virtual reality while enjoying delicious cakes
          and coffee. Step into another world!
        </p>

       <button
  onClick={() =>
    window.open("https://forms.gle/mus8pP1eKBcJRA7j9", "_blank")
  }
  style={{
    padding: "12px 25px",
    background: "#a9802A",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.3s"
  }}
  onMouseEnter={(e) => {
    e.target.style.background = "#ff6b6b";
    e.target.style.transform = "scale(1.1)";
  }}
  onMouseLeave={(e) => {
    e.target.style.background = "#a9802A";
    e.target.style.transform = "scale(1)";
  }}
>
  Book VR Slot 🎮
</button>
      </div>
    </div>
  );
}

export default VR;