import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./NewPassword.module.css";
import SignUpHeader from "../Components/SignUpHeader";
// import { Link } from "react-router-dom";

function NewPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [formInput, setFormInput] = useState({
    password: "",
    confirmPassword: "",
    successMsg: "",
  });
  const [formError, setFormError] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();

    let inputError = {
      password: "",
      confirmPassword: "",
    };

    if (!formInput.password && !formInput.confirmPassword) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
        confirmPassword: "Confirm Password should not be empty",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }
    if (!formInput.confirmPassword) {
      setFormError({
        ...inputError,
        confirmPassword: "Confirm Password should not be empty",
      });
      return;
    }
    if (formInput.password !== formInput.confirmPassword) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and Confirm Password should be the same",
      });
      return;
    }

    setFormError(inputError);
    setFormError({
      ...setFormInput,
      successMsg: "Successful",
    });
    return;
  };

  return (
    <main>
      <header>
        <SignUpHeader />
      </header>
      <section className={styles.body}>
        <h1 className={styles.h1}>Set New Password !</h1>
        <form className={styles.form} id="form" onSubmit={validateFormInput}>
          <p className={styles.label}>Set the new password for your account.</p>
          <div className={styles.formGroup}>
            <input
              id="password"
              name="password"
              className={styles.input}
              type={passwordVisible ? "text" : "password"}
              value={formInput.password}
              placeholder="New Password"
              onChange={handleUserInput}
            ></input>
            <div
              className={styles.icon}
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <MdVisibilityOff /> : <MdVisibility />}
            </div>
          </div>
          <p className={styles.error}>{formError.password}</p>
          <div className={styles.formGroup}>
            <input
              id="confirm password"
              name="confirmPassword"
              className={styles.input}
              type={confirmPasswordVisible ? "text" : "password"}
              value={formInput.confirmPassword}
              placeholder="Confirm Password"
              onChange={handleUserInput}
            ></input>
            <div
              className={styles.icon}
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              {confirmPasswordVisible ? <MdVisibilityOff /> : <MdVisibility />}
            </div>
          </div>
          <p className={styles.error}>{formError.confirmPassword}</p>

          <p className={styles.error}>{formInput.successMsg}</p>
          {/* <Link to={"/Login"}> */}
          <button className={styles.button}>Submit</button>
          {/* </Link> */}
        </form>
      </section>
    </main>
  );
}
export default NewPassword;
