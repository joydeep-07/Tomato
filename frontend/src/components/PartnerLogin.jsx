import React from "react";
import "../styles/auth.css";

const PartnerLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Food Partner Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>Don’t have an account? Register</p>
      </div>
    </div>
  );
};

export default PartnerLogin;
