import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dummy login (we will connect backend later)
    if (email === "admin@test.com" && password === "1234") {
      localStorage.setItem("role", "admin");
      alert("Admin Login Successful");
      window.location.href = "/admin";
    } else {
      localStorage.setItem("role", "user");
      alert("User Login Successful");
      window.location.href = "/";
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;