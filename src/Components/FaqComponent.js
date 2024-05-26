import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import styles from "./FaqComponent.module.css";
// import { FaQ } from "react-icons/fa6";

function FAQComponent({ title, answer }) {
  const [answerVisible, setAnswerVisible] = useState(true);
  return (
    <>
      <header
        className={styles.answerHeader}
        onClick={() => setAnswerVisible(!answerVisible)}
      >
        <h2 className={styles.answerHeading}>{title}</h2>
        <div>{answerVisible ? <FaChevronUp /> : <FaChevronDown />}</div>
      </header>
      <div
        className={answerVisible ? styles.answerHidden : styles.answerExpanded}
      >
        {answer}
      </div>
    </>
  );
}
export default FAQComponent;
