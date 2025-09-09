import React from "react";
import "../styles/auth.css";

const PartnerRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Food Partner Register</h2>
        <form>
          <input type="text" placeholder="Restaurant Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Location" />
          <button type="submit">Register</button>
        </form>
        <p>Already registered? Login</p>
      </div>
    </div>
  );
};

export default PartnerRegister;
