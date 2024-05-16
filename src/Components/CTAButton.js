import "../Components/CTAButton.css";

function Button({ text, onClick }) {
  return (
    <>
      <button className="submit-button" onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default Button;
