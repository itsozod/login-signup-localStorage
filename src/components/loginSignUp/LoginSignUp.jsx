import styles from "./LoginSignUp.module.css";
import { Home } from "./Home";
import { useRef, useState, useEffect } from "react";

const LoginSignUp = () => {
  const [home, setHome] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [logged, setLogged] = useState(false);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const localSignUp = localStorage.getItem("signup");
  const localName = localStorage.getItem("name");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");

  useEffect(() => {
    if (localSignUp) {
      setHome(true);
    }
    if (localEmail) {
      setLoginPage(true);
    }
  }, [localSignUp, localEmail]);

  const handleSignUp = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signup", email.current.value);
      alert("Account is created successfully!");
      window.location.reload();
      console.log(
        name.current.value,
        email.current.value,
        password.current.value
      );
    } else {
      return;
    }
  };

  const handleSignIn = () => {
    if (email.current.value === "" || password.current.value === "") {
      alert("Please enter your details!");
      return;
    } else if (
      email.current.value !== localEmail ||
      password.current.value !== localPassword
    ) {
      alert("Incorrect email or password!");
    } else {
      setHome(true);
      setLogged(true);
    }
  };

  const handleClickMe = () => {
    if (!logged) {
      alert("You can't click me yet!!!");
    } else {
      alert("Good job");
    }
  };
  return (
    <>
      <button onClick={() => handleClickMe()}>Click me!!!</button>
      {home ? (
        <Home />
      ) : loginPage ? (
        <div className={styles.container}>
          <h1>Welcome {localName}</h1>
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
          <button onClick={() => handleSignIn()} className={styles.sign_btn}>
            Sign In
          </button>
        </div>
      ) : (
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
          <button onClick={() => handleSignUp()} className={styles.sign_btn}>
            Sign Up
          </button>
        </div>
      )}
    </>
  );
};

export default LoginSignUp;
