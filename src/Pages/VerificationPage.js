import * as React from "react";
import "../Pages/Verification.css";
import CTAButton from "../Components/CTAButton";

function VerificationCodeInput({ digit }) {
  const [code, setCode] = React.useState("");

  function handleVerify(e) {
    e.preventDefault();
  }

  return (
    <input
      type="text"
      maxLength="1"
      className="verification-code-input"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      onSubmit={handleVerify}
    />
  );
}

export default function VerificationPage() {
  return (
    <>
      <header className="header">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0a312d70048a81c3e0b97420bdbb31a4d89d2fb5982aec87ed80114733eedd2?apiKey=66cde03c14284deb81366fe06ee3971c&"
          alt="Media Hub Logo"
          className="logo"
        />
        <h1 className="title">Media Hub</h1>
      </header>
      <main className="container">
        <h2 className="subtitle">Enter Verification Code</h2>
        <p className="description">
          Check your email for the verification code, we sent you a 4 digits
          code to your email.
        </p>
        <div className="verification-code-inputs">
          {[...Array(4)].map((_, index) => (
            <VerificationCodeInput key={index} digit={index + 1} />
          ))}
        </div>
        <p className="timer">00:30</p>
        <div className="resend-code">
          <span className="resend-code-text">Did not get Code?</span>
          <button className="resend-code-button">Resend Code</button>
        </div>
        <CTAButton text="Submit" />
      </main>
    </>
  );
}
