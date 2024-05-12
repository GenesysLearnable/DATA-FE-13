import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import "./Signup.css";

import googlePic from "../Assets/deviconGoogle.png";
import facebookPic from "../Assets/deviconFacebook.png";
import applePic from "../Assets/logosApple.png";
import mediaPic from "../Assets/mediaHub.png";
import musicPic from "../Assets/musicBar.png";
import line from "../Assets/line.png";

const Signup = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const [types, setTypes] = useState("password");
  const [icons, setIcons] = useState(eyeOff);

  const [agreed, setAgreed] = useState(false);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const handleToggles = () => {
    if (types === "password") {
      setIcons(eye);
      setTypes("text");
    } else {
      setIcons(eyeOff);
      setTypes("password");
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const history = useHistory;
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    setIsSubmitted(true);
    try {
      const response = await fetch(
        "https://data-be-13-4.onrender.com/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }), // Include name in the request body
        }
      );

      if (response.ok) {
        // Handle successful sign up
        history("/VerificationPage");
      } else {
        // Handle sign-up failure
        const data = await response.json();
        alert(data.message || "Sign up failed");
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("An error occurred during sign-up. Please try again later.");
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <div className="navigation">
        <div className="navLogo">
          <img className="musicPic" src={musicPic} alt="volume bar" />
          <img className="mediaPic" src={mediaPic} alt="Media name" />
        </div>
        <a className="login" href="#">
          LOGIN
        </a>
      </div>
      <div className="container">
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

            <span onClick={handleToggle}>
              <Icon icon={icon} />
            </span>
          </div>
          <div className="passwordInput">
            <input
              type={types}
              placeholder="Confirm Password"
              className="inputCode"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span onClick={handleToggles}>
              <Icon icon={icons} />
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
            {/* <label className="checkboxText">
            I agree to the terms and conditions
          </label> */}
          </div>

          {/* <div className="terms">
          <button className="clickTerm"></button>
          <p className="signupText">
          By Signing up, you agree to our terms of service, privacy policy and
          any applicable community guideliness
          </p>
        </div> */}
          <button type="submit" disabled={isSubmitted} className="signupBtn">
            Sign Up
          </button>
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
