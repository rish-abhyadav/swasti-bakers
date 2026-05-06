import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div
      style={{
        height: "90vh",
        background: "url('/images/hero.jpg') center/cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* ✨ FLOATING PARTICLES */}
      <div className="particles"></div>

      {/* 🔥 CONTENT BOX (SHRUNK BLUR) */}
      <div
        style={{
          backdropFilter: "blur(8px)",
          background: "rgba(255,255,255,0.15)",
          padding: "8px 13px",
          borderRadius: "6px",
          textAlign: "center",
          color: "white",
          zIndex: 2,

          /* 🔥 KEY FIX */
          display: "inline-block",
          maxWidth: "500px",
          margin: "auto",

          /* Optional premium border */
          border: "1px solid rgba(255,255,255,0.2)",

          animation: "fadeIn 1.2s ease"
        }}
      >
        {/* 🔥 HEADING */}
        <h1
          style={{
            fontSize: "42px",
            background: "linear-gradient(90deg, #a9802A, #ff6b6b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "10px"
          }}
        >
        </h1>

        {/* ✨ TYPEWRITER TEXT */}
        <div style={{ fontSize: "18px", marginBottom: "15px" }}>
          <Typewriter
            options={{
              strings: [
                "Fresh Cakes 🍰",
                "Hot Coffee ☕",
                "VR Experience 🎮",
                "Delicious Desserts 🍩"
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>

        {/* 🚀 CTA BUTTON */}
        <button
          className="cta-btn"
          onClick={() => (window.location.href = "#menu")}
        >
          Explore Menu 🍰
        </button>
      </div>
    </div>
  );
}

export default Hero;