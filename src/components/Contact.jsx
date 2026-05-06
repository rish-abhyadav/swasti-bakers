function Contact() {
  return (
    <div
      id="contact"
      style={{
        padding: "60px 20px",
        background: "#222",
        color: "white",
        textAlign: "center"
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Contact Us</h2>

      <p>📧 Email: swastibakerscafe@gmail.com</p>
      <p>📞 Phone: +91 8874919294</p>

      {/* CLICKABLE LOCATION */}
      <p>
        📍 Location:{" "}
        <a
          href="https://maps.app.goo.gl/niHmYNuLkjYvJ9oy5"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ff6b6b",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          7X65+C3X, Kardmeshwarpuram Colony, Bari bazar, Varanasi, Kandwa, Uttar Pradesh 221106
        </a>
      </p>

      {/* OPTIONAL BUTTON */}
      <button
        onClick={() =>
          window.open(
            "https://maps.app.goo.gl/niHmYNuLkjYvJ9oy5",
            "_blank"
          )
        }
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          background: "#ff6b6b",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Open Location 📍
      </button>

      {/* CONTACT FORM */}
      <div style={{ marginTop: "20px" }}>
        <input type="text" placeholder="Your Name" style={inputStyle} />
        <br /><br />

        <input type="email" placeholder="Your Email" style={inputStyle} />
        <br /><br />

        <textarea
          placeholder="Your Message"
          style={{ ...inputStyle, height: "100px" }}
        />
        <br /><br />

        <button style={btnStyle}>Send Message</button>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  width: "250px",
  borderRadius: "5px",
  border: "none"
};

const btnStyle = {
  padding: "10px 20px",
  background: "#ff6b6b",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default Contact;