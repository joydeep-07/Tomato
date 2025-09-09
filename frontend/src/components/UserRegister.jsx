import React from "react";
import "../styles/auth.css";

const UserRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>User Register</h2>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
      
    </div>
  );
};

export default UserRegister;
