import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import CTAButton from "../Components/CTAButton";
import { ThreeDots } from "react-loader-spinner";

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

  const handleSignUpClick = () => {
    // Navigate to the signup page
    history("/");
  };

  return (
    <div className="sign-up-button" onClick={handleSignUpClick}>
      Sign up
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

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate(); // Initialize useHistory hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://data-be-13-4.onrender.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        history("/Dashboard");
      } else {
        // Login failed
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-title">Login</h1>
      {error && <div className="error-message">{error}</div>}
      <input
        type="email"
        id="email"
        className="email-input"
        placeholder="Enter email"
        aria-label="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        className="password-input"
        placeholder="Enter Password"
        aria-label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="forgot-password">
        {" "}
        Forgot Password? <span className="click-here">Click Here</span>
      </div>
      <CTAButton text="Login" type="submit" disabled={isLoading}>
        {isLoading && (
          <ThreeDots height="10" width="80" color="#fff" ariaLabel="loading" />
        )}
      </CTAButton>
    </form>
  );
}

function SocialLogin() {
  return (
    <div className="social-login">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/377b329330ce3406eb0c60b181350530f498f02fb030a50dba76b9cd1c0bf1dc?apiKey=66cde03c14284deb81366fe06ee3971c&"
        className="divider-line"
        alt=""
        aria-hidden="true"
      />
      <div className="social-login-text">or login with</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/377b329330ce3406eb0c60b181350530f498f02fb030a50dba76b9cd1c0bf1dc?apiKey=66cde03c14284deb81366fe06ee3971c&"
        className="divider-line"
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}

function SocialIcons() {
  const icons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/80f1d63e047ed39ef108d68eeda279036ae518384d064c6ad585276661b5470d?apiKey=66cde03c14284deb81366fe06ee3971c&",
      alt: "Facebook icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff07a1c85b9e5fd7ba20a3a259b879c5603f65a848a5fe506a147486a2c50672?apiKey=66cde03c14284deb81366fe06ee3971c&",
      alt: "Twitter icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f3bce996c671edfa74b3b1bbad5b231af4d121d4adf3b58d32de1dcd05088fd?apiKey=66cde03c14284deb81366fe06ee3971c&",
      alt: "Google icon",
    },
  ];

  return (
    <div className="social-icons">
      {icons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          // className={`social-icon-${index + 1}`}
          className="social-icon"
          alt={icon.alt}
        />
      ))}
    </div>
  );
}

function Login() {
  return (
    <>
      <Header />
      <div className="container">
        <LoginForm />
        <SocialLogin />
        <SocialIcons />
      </div>
    </>
  );
}

export default Login;
