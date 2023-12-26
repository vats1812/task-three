import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setisValidEmail] = useState(true);

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Validate the email as the user types
    setisValidEmail(validateEmail(newEmail));
  };

  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

  const validatePassword = (password) => {
    // Password must contain an uppercase letter and a number,
    // and special characters must be limited to '@'
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]*$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Validate the password as the user types
    setIsValidPassword(validatePassword(newPassword));
  };

  return (
    <>
      <div className="login-body">
        <img src={logo} alt="logo" />
        <input
          type="text"
          className="username"
          placeholder="Username"
          value={email}
          onChange={handleEmailChange}
        />
        {email === "" ? (
          ""
        ) : !isValidEmail ? (
          <p style={{ width: "350px", color: "red" }}>Invalid email address</p>
        ) : (
          ""
        )}
        <input
          type="password"
          className="username"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {password === ""
          ? ""
          : !isValidPassword && (
              <p style={{ width: "350px", color: "red" }}>
                Invalid password. Password must contain an uppercase letter, a
                number, and special characters only '@'.
              </p>
            )}
        <button>Login</button>
        <div className="forgot-pass">
          <a href="/" target="_blank" rel="noopener noreferrer">
            Forgot your password?
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
