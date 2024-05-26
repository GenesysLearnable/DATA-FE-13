import React from "react";
import styles from "./Pages/Forgotpassword.css";

function Forgotpassword() {
  return (
    <div className={styles.brand}>
      <div className={styles.navbar}>
        <img src="./Assets/Vector.png" alt="logo" />
        <h2 className={styles.mediatitle}>Media Hub</h2>
        <button className={styles.sigup}>Sign up</button>
      </div>

      <div className={styles.container}>
        <div className={styles.pass}>
          <h1 className={styles.h1}>Forgot Password?</h1>
          <input
            type="text"
            placeholder="Enter Email Address"
            className={styles.input}
          />
        </div>
        <div className={styles.gettitle}>
          <h4 className={styles.add}>
            Didn’t get an email? <span>Resend</span>
            <h4 className={styles.add}>00:30</h4>
          </h4>
        </div>
        <div className={styles.submitbtn}>
          <button className={styles.fbutton}>submit</button>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
