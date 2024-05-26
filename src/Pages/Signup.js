import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { ThreeDots } from "react-loader-spinner"; // Import the specific spinner
import CTAButton from "../Components/CTAButton";
import "./Signup.css";

import googlePic from "../Assets/deviconGoogle.png";
import facebookPic from "../Assets/deviconFacebook.png";
import applePic from "../Assets/logosApple.png";
import line from "../Assets/line.png";

function Logo() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/367cf16ca5a644a92622ce65734121e17b5404c7bddfaad75d6e9eb7e95e40c1?apiKey=66cde03c14284deb81366fe06ee3971c&"
      className="logo"
      alt="Media Hub logo"
    />
  );
}

function SignUpButton() {
  const history = useNavigate();

  const handleLoginClick = () => {
    // Navigate to the signup page
    history("/login");
  };

  return (
    <div className="sign-up-button" onClick={handleLoginClick}>
      Login
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Logo />
        <div className="logo-text">Media Hub</div>
      </div>
      <SignUpButton />
    </header>
  );
}

const Signup = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [confirmType, setConfirmType] = useState("password");
  const [confirmIcon, setConfirmIcon] = useState(eyeOff);
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setType(type === "password" ? "text" : "password");
    setIcon(type === "password" ? eye : eyeOff);
  };

  const handleConfirmToggle = () => {
    setConfirmType(confirmType === "password" ? "text" : "password");
    setConfirmIcon(confirmType === "password" ? eye : eyeOff);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    setIsSubmitted(true);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://data-be-13-4.onrender.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      if (response.ok) {
        navigate("/VerificationPage");
      } else {
        const data = await response.json();
        alert(data.message || "Sign up failed");
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("An error occurred during sign-up. Please try again later.");
      setIsSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="signup-container">
        <form className="content" onSubmit={handleSubmit}>
          <header className="h1"> Sign Up</header>
          <div className="emailInput">
            <input
              type="text"
              placeholder="Enter Name"
              className="inputName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="emailInput">
            <input
              type="email"
              placeholder=" Enter Email"
              className="inputEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="passwordInput">
            <input
              type={type}
              placeholder="Enter Password"
              className="inputCode"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={handleToggle}
              aria-label="Toggle password visibility"
            >
              <Icon icon={icon} />
            </span>
          </div>
          <div className="passwordInput">
            <input
              type={confirmType}
              placeholder="Confirm Password"
              className="inputCode"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              onClick={handleConfirmToggle}
              aria-label="Toggle password visibility"
            >
              <Icon icon={confirmIcon} />
            </span>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
              id="checkbox"
            />
            <label htmlFor="checkbox">
              I agree to the terms and conditions
            </label>
          </div>
          <CTAButton
            type="submit"
            disabled={isSubmitted || isLoading}
            // className="signupBtn"
          >
            {isLoading ? (
              <ThreeDots height="10" width="40" color="#fff" />
            ) : (
              "Sign Up"
            )}
          </CTAButton>
        </form>
        <footer className="footerPage">
          <div className="footerP">
            <img className="line" src={line} alt="line" />
            <div className="footerText">or sign up with</div>
            <img className="line" src={line} alt="line" />
          </div>
          <div className="footerLink">
            <img className="footerIcon" src={googlePic} alt="google icon" />
            <img className="footerIcon" src={applePic} alt="apple icon" />
            <img className="footerIcon" src={facebookPic} alt="facebook icon" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Signup;
