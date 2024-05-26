import React from "react";
import "../Components/CTAButton.css";

function CTAButton({ text, onClick, children, disabled }) {
  return (
    <button className="submit-button" onClick={onClick} disabled={disabled}>
      {children || text}
    </button>
  );
}

export default CTAButton;
