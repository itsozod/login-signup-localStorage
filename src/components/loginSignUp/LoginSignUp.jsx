import styles from "./LoginSignUp.module.css";
import { useRef } from "react";

const LoginSignUp = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signup", email.current.value);
      console.log(
        name.current.value,
        email.current.value,
        password.current.value
      );
    } else {
      return;
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.input_container}>
          <input
            className={styles.signUp_input}
            type="text"
            placeholder="Enter name"
            ref={name}
          />
        </div>
        <div className={styles.input_container}>
          <input
            className={styles.signUp_input}
            type="text"
            placeholder="Enter email"
            ref={email}
          />
        </div>
        <div className={styles.input_container}>
          <input
            className={styles.signUp_input}
            type="password"
            placeholder="Enter password"
            ref={password}
          />
        </div>
        <button onClick={() => handleClick()} className={styles.sign_btn}>
          Sign Up
        </button>
      </div>
    </>
  );
};

export default LoginSignUp;
