import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Verification.css";
import CTAButton from "../Components/CTAButton";

function VerificationCodeInput({ value, onChange, index }) {
  return (
    <input
      type="text"
      maxLength="1"
      className="verification-code-input"
      value={value}
      onChange={(e) => onChange(e.target.value, index)}
    />
  );
}

export default function VerificationPage() {
  const [verificationCode, setVerificationCode] = React.useState([
    "",
    "",
    "",
    "",
  ]);
  const [verificationStatus, setVerificationStatus] = React.useState(null);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
  };

  async function handleVerify(e) {
    e.preventDefault();
    const code = verificationCode.join("");

    if (code.length !== 4) {
      setVerificationStatus("Please enter the 4-digit verification code.");
      return;
    }

    console.log("Verification code being sent:", code);

    try {
      const response = await fetch(
        "https://data-be-13-4.onrender.com/api/v1/auth/verifyCode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ verificationCode: code }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        setVerificationStatus(
          errorData.message || "Verification failed. Please try again."
        );
        return;
      }

      const data = await response.json();
      console.log("Server response:", data);

      if (data.status === "success") {
        navigate("/Login");
      } else {
        setVerificationStatus(
          data.message || "Verification failed. Please try again."
        );
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      setVerificationStatus("An error occurred. Please try again.");
    }
  }

  return (
    <>
      <header className="Ver-header">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0a312d70048a81c3e0b97420bdbb31a4d89d2fb5982aec87ed80114733eedd2?apiKey=66cde03c14284deb81366fe06ee3971c&"
          alt="Media Hub Logo"
          className="ver-logo"
        />
        <h1 className="ver-title">Media Hub</h1>
      </header>
      <main className="ver-container">
        <h2 className="ver-subtitle">Enter Verification Code</h2>
        <p className="description">
          Verification code of 4-digit has been sent you to your email.
        </p>
        <form onSubmit={handleVerify}>
          <div className="verification-code-inputs">
            {verificationCode.map((digit, index) => (
              <VerificationCodeInput
                key={index}
                value={digit}
                index={index}
                onChange={handleChange}
              />
            ))}
          </div>
          <div className="form-footer">
            <p className="timer">00:30</p>
            <div className="resend-code">
              <span className="resend-code-text">Did not get Code?</span>
              <button type="button" className="resend-code-button">
                Resend Code
              </button>
            </div>
            <CTAButton text="Submit" />
          </div>
        </form>
        {verificationStatus && <p className="error">{verificationStatus}</p>}
      </main>
    </>
  );
}
